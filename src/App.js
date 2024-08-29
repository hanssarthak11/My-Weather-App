import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { useState } from "react";
import Icon from "./components/Icon";
import WeatherDetails from "./components/WeatherDetails";
import { X } from "lucide-react";
import ForecastDetails from "./components/ForecastDetails";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [imagePath, setImagePath] = useState("images/01d.jpg");
  const [popUp, setPopUp] = useState(false);

  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(`${process.env.REACT_APP_WEATHER_URL}weather/?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
    const forecastWeatherFetch = fetch(`${process.env.REACT_APP_WEATHER_URL}forecast/?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
    console.log(process.env.REACT_APP_WEATHER_API_KEY);
    console.log(process.env.REACT_APP_WEATHER_URL);
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setImagePath(`images/${weatherResponse.weather[0].icon}.jpg`);
      })
      .catch((err) => console.error(err));

  }

  const handleOnClick = () => {
    setPopUp(true);
  }

  const handleCrossClick = () => {
    setPopUp(false);
  }

  const handleClickOutside = () => {
    if (popUp) {
      setPopUp(false);
    }
  };

  return (
    <>
      <div className="container w-screen h-screen grid grid-rows-4 lg:flex "
        style={{ backgroundImage: `url(${imagePath})`, backgroundSize: "cover", backgroundPosition: "right" }} >
        <div className="left row-span-2 lg:w-4/6" onClick={handleClickOutside}>
          <div className="search w-full flex justify-center items-center h-1/6 bg-red pt-10">
            <Search onSearchchange={handleOnSearchChange} />
          </div>
          <div className="current-weather grid grid-cols-2 grid-rows-2 grid-flow-row h-5/6 pt-24 pb-5">
            {currentWeather && <CurrentWeather data={currentWeather} />}
          </div>
        </div>
        <div className="right row-span-2 lg:w-2/6 lg:h-screen flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-sm lg:border-l-2" onClick={handleClickOutside}>
          {currentWeather &&
            <>
              <div className="icon lg:h-2/5 w-full p-5 lg:flex lg:flex-col lg:gap-7 lg:justify-center lg:items-center lg:mt-10 text-white flex items-center justify-between gap-2">
                <Icon data={currentWeather.weather[0].icon} />
                <div className="weatherdescription">
                  <p className="p-2 w-fit lg:text-5xl text-4xl lg:font-semibold">{currentWeather.weather[0].main}</p>
                </div>
              </div>
              <WeatherDetails data={currentWeather.main} />
              <button className="lg:h-12 h-8 w-2/6 text-lg text-white bg-white bg-opacity-30 backdrop-blur-lg border border-white border-opacity-60 rounded-md m-10" onClick={handleOnClick}>Forecast</button>
            </>
          }
        </div>
        {popUp &&
          <div className="pop-up w-5/6 h-5/6 absolute top-1/2 left-1/2 bg-white bg-opacity-70 backdrop-blur-sm border-2 border-white border-opacity-100 rounded-3xl lg:p-3 p-2 shadow-2xl "
            style={{ transform: "translate(-50%,-50%)" }}>
            <div className="button flex justify-end mt-5 mr-5">
              <button onClick={handleCrossClick} onclassName=""><X /></button>
            </div>
            {forecast && <ForecastDetails data={forecast} />}
          </div>
        }
      </div>
    </>
  );
}

export default App;