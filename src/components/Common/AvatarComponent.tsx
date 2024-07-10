import AvatarPlaceholder from 'images/avatar_placeholder.png';

export interface AvatarComponentProps {
    src: string;
}

export function AvatarComponent({ src }: AvatarComponentProps) {
    const avtSrc = !!src
        ? `${process.env.REACT_APP_TFASHION_DOMAIN}/storage/${src}`
        : AvatarPlaceholder;
    return <img src={avtSrc} alt="Avatar" />;
}
