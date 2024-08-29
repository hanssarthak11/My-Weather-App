import { DateTime } from "luxon";

const CurrentWeather = ({ data }) => {
    return (
        <>
            <div className="time lg:text-xl text-sm text-white lg:pl-5 pl-1">
                <p>{DateTime.now().setZone('UTC').plus({ seconds: data.timezone }).toFormat("cccc, dd LLLL yyyy")}</p>
                <p>{DateTime.now().setZone('UTC').plus({ seconds: data.timezone }).toFormat("'Local time: 'hh:mm a")}</p>
            </div>
            <div className="temperature grid justify-items-end lg:pr-8 pr-2 lg:text-7xl text-6xl text-white">
                {Math.round(data.main.temp)}&deg;C
            </div>
            <div className="city grid col-span-2 lg:justify-end justify-center content-end lg:text-6xl text-4xl pr-8 font-semibold text-white">
                {data.city}
            </div>
        </>
    )
}

export default CurrentWeather;
