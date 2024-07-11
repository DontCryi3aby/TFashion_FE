import { Box } from '@mui/material';
import * as React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Slider1 from 'images/slider1.jpg';
import Slider2 from 'images/slider2.jpg';
import { theme } from 'utils';

export interface SliderProps {}

export default function Slider(props: SliderProps) {
    return (
        <Splide
            aria-label="My Favorite Images"
            options={{
                type: 'loop',
                pagination: false,
            }}
            hasTrack={false}
        >
            <SplideTrack>
                <SplideSlide>
                    <Box>
                        <img src={Slider1} alt="slider 1" />
                    </Box>
                </SplideSlide>
                <SplideSlide>
                    <Box>
                        <img src={Slider2} alt="slider 2" />
                    </Box>
                </SplideSlide>
            </SplideTrack>

            <Box className="splide__arrows">
                <Box
                    sx={{
                        minWidth: 60,
                        minHeight: 60,
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: theme.palette.common.white,
                        outline: 'none',
                        borderRadius: 0,
                    }}
                    component="button"
                    className="splide__arrow splide__arrow--prev"
                >
                    <Box sx={{ fontSize: '40px' }}>&lsaquo;</Box>
                </Box>
                <Box
                    sx={{
                        minWidth: 60,
                        minHeight: 60,
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: theme.palette.common.white,
                        outline: 'none',
                        borderRadius: 0,
                    }}
                    component="button"
                    className="splide__arrow splide__arrow--next"
                >
                    <Box sx={{ fontSize: '40px' }}>&rsaquo;</Box>
                </Box>
            </Box>
        </Splide>
    );
}
