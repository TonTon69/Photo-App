import "./Banner.scss";

interface IBannerProps {
    title: string;
    backgroundUrl?: string;
}

function Banner(props: IBannerProps) {
    const { title, backgroundUrl } = props;

    const bannerStyle = backgroundUrl
        ? { backgroundImage: `url(${backgroundUrl})` }
        : {};

    return (
        <div className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </div>
    );
}

export default Banner;
