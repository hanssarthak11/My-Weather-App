function WeatherDetails(data) {
  return (
    <div className="h-2/5 w-full lg:p-5 px-2 lg:flex lg:flex-col lg:items-center lg:gap-2 gap-1 lg:text-xl grid grid-rows-3 grid-cols-2 text-white text-md">
      <div className="bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-60 rounded-md lg:h-12 lg:w-3/4 p-2 flex items-center justify-between">
        <p>Feels Like :</p>
        <p>{Math.round(data.data.feels_like)}&deg;C</p>
      </div>
      <div className="bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-60 rounded-md lg:h-12 lg:w-3/4 p-2 flex items-center justify-between">
        <p>Minimum Temperature :</p>
        <p>{Math.round(data.data.temp_min)}&deg;C</p>
      </div>
      <div className="bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-60 rounded-md lg:h-12 lg:w-3/4 p-2 flex items-center justify-between">
        <p>Maximum Temperature :</p>
        <p>{Math.round(data.data.temp_max)}&deg;C</p>
      </div>
      <div className="bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-60 rounded-md lg:h-12 lg:w-3/4 p-2 flex items-center justify-between">
        <p>Pressure :</p>
        <p>{data.data.pressure} hPa</p>
      </div>
      <div className="bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-60 rounded-md lg:h-12 lg:w-3/4 p-2 flex items-center justify-between">
        <p>Humidity :</p>
        <p>{data.data.humidity}%</p>
      </div>
    </div>
  )
}

export default WeatherDetails
