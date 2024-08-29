import {
    Sun,
    Moon,
    CloudSun,
    CloudMoon,
    Cloud,
    Cloudy,
    CloudRain,
    CloudSunRain,
    CloudMoonRain,
    CloudLightning,
    Snowflake,
    CloudFog
} from 'lucide-react';

export default function Icon({ data }) {
    let IconComponent;

    switch (data) {
        case "01d":
            IconComponent = Sun;
            break;
        case "01n":
            IconComponent = Moon;
            break;
        case "02d":
            IconComponent = CloudSun;
            break;
        case "02n":
            IconComponent = CloudMoon;
            break;
        case "03d":
        case "03n":
            IconComponent = Cloud;
            break;
        case "04d":
        case "04n":
            IconComponent = Cloudy;
            break;
        case "09d":
            IconComponent = CloudRain;
            break;
        case "10d":
            IconComponent = CloudSunRain;
            break;
        case "10n":
            IconComponent = CloudMoonRain;
            break;
        case "11d":
        case "11n":
            IconComponent = CloudLightning;
            break;
        case "13d":
        case "13n":
            IconComponent = Snowflake;
            break;
        case "50d":
        case "50n":
            IconComponent = CloudFog;
            break;
        default:
            IconComponent = Sun;
            break;
    }


    return <IconComponent size={120} />
}

export const ForecastIcon = ({ data }) => {
    let IconComponent;

    switch (data) {
        case "01d":
            IconComponent = Sun;
            break;
        case "01n":
            IconComponent = Moon;
            break;
        case "02d":
            IconComponent = CloudSun;
            break;
        case "02n":
            IconComponent = CloudMoon;
            break;
        case "03d":
        case "03n":
            IconComponent = Cloud;
            break;
        case "04d":
        case "04n":
            IconComponent = Cloudy;
            break;
        case "09d":
            IconComponent = CloudRain;
            break;
        case "10d":
            IconComponent = CloudSunRain;
            break;
        case "10n":
            IconComponent = CloudMoonRain;
            break;
        case "11d":
        case "11n":
            IconComponent = CloudLightning;
            break;
        case "13d":
        case "13n":
            IconComponent = Snowflake;
            break;
        case "50d":
        case "50n":
            IconComponent = CloudFog;
            break;
        default:
            IconComponent = Sun;
            break;
    }


    return <IconComponent size={30} />
}
