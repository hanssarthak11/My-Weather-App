import { ForecastIcon } from "./Icon";
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function ForecastDetails({ data }) {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div className='forecast-detials w-full h-5/6 text-black mt-4 flex flex-col justify-center items-center p-15 '>
            <label className="title text-2xl font-semibold">Daily</label>
            <Accordion allowZeroExpanded className='lg:w-5/6 w-full '>
                {data && data.list && data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx} >
                        <AccordionItemHeading className='border-2 border-black w-full mt-2 h-12 content-center lg:p-2 p-1 rounded-lg '>
                            <AccordionItemButton className='hover:cursor-pointer'>
                                <div className="daily-details flex justify-between">
                                    <div className="icon flex lg:gap-4 gap-1 items-center">
                                        <ForecastIcon key={idx} data={item.weather[0].icon} />
                                        <label className="Days hover:cursor-pointer font-bold text-sm lg:text-lg">{forecastDays[idx]}</label>
                                    </div>

                                    <div className="flex justify-between w-2/6">
                                        <label className="description hover:cursor-pointer font-semibold text-sm flex items-center lg:text-lg">{item.weather[0].description}</label>
                                        <label className="min-max hover:cursor-pointer text-gray-500 hidden lg:block content-center">{Math.round(item.main.temp_min)}&deg;C/{Math.round(item.main.temp_max)}&deg;C</label>
                                    </div>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="forecast-details grid grid-cols-2 grid-rows-3 lg:gap-x-8 lg:px-3 lg:text-md text-sm lg:text-lg gap-1 items-center h-28">
                                <div className="details-item flex justify-between">
                                    <label className="">Pressure : </label>
                                    <label className="text-gray-500">{item.main.pressure} hPa</label>
                                </div>
                                <div className="details-item flex justify-between ">
                                    <label className="">Humidity : </label>
                                    <label className="text-gray-500">{item.main.humidity}%</label>
                                </div>
                                <div className="details-item flex justify-between">
                                    <label className="">Clouds : </label>
                                    <label className="text-gray-500">{item.clouds.all}%</label>
                                </div>
                                <div className="details-item flex justify-between">
                                    <label className="">Wind Speed : </label>
                                    <label className="text-gray-500">{item.wind.speed}m/s</label>
                                </div>
                                <div className="details-item flex justify-between">
                                    <label className="">Sea Level : </label>
                                    <label className="text-gray-500">{item.main.sea_level} m</label>
                                </div>
                                <div className="details-item flex justify-between">
                                    <label className="">Feels Like : </label>
                                    <label className="text-gray-500">{Math.round(item.main.feels_like)}&deg;C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}


            </Accordion>
        </div>
    )
}

export default ForecastDetails
