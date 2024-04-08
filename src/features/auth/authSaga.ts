import { take, call, fork, put } from 'redux-saga/effects';
import { authActions } from './authSlice';
import { LoginPayload, TokenResponse, User } from 'models';
import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { history } from 'utils';

function* handleLogin(payload: LoginPayload) {
    console.log('Hanle Login', payload);
    try {
        const { access_token, refresh_token }: TokenResponse = yield call(authApi.login, payload);
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);

        const currentUser: User = yield call(authApi.profile);
        console.log(currentUser);

        yield put(authActions.loginSuccess(currentUser));
        yield call(history.push, '/');
    } catch (error: any) {
        console.log(error.message);
        yield put(authActions.loginFailed(error.message));
    }
}
function* handleLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    yield call(history.push, '/login');
}

export function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = !!localStorage.getItem('access_token');

        if (isLoggedIn) {
            yield take(authActions.logout.type);
            yield call(handleLogout);
        } else {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield call(handleLogin, action.payload);
        }
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
