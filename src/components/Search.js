import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GeoApiOptions } from '../Api';
import clsx from 'clsx';

const Search = ({ onSearchchange }) => {
    const [search, setSearch] = useState(null);


    const loadOptions = async (inputValue) => {
        return fetch(
            `${process.env.REACT_APP_GEO_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, GeoApiOptions
        )
            .then((response) => response.json())
            .then((result) => {
                return {
                    options: result.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ,${city.countryCode}`
                        }
                    }
                    )
                }
            }
            )
            .catch((err) => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchchange(searchData);
    }
    return (
        <>
            <AsyncPaginate className='search-bar w-2/3 lg:w-1/3'
                placeholder="Search the city"
                debounceTimeout={1000}
                onChange={handleOnChange}
                value={search}
                loadOptions={loadOptions}
                unstyled

                classNames={{
                    control: ({ isFocused }) =>
                        clsx(
                            "rounded-md hover:cursor-pointer bg-white bg-opacity-50 backdrop-blur-lg border-2 border-opacity-60",
                            isFocused ? "border-black" : "border-white",
                        ),
                    placeholder: () => "text-black py-0.5 font-normal pl-1",
                    input: () => "py-0.5",
                    valueContainer: () => "pt-1 pb-1 pl-2 text-black font-medium",
                    menu: () => "p-1 mt-2 bg-white bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-60 rounded-lg",
                    dropdownIndicator: () => "mr-2 text-black border-l-2 border-black pl-2",
                    option: ({ isFocused }) => clsx("px-3 py-1 text-black rounded-lg hover:cursor-pointer",
                        isFocused ? "border-2 border-black text-black" : "text-black",
                    )
                }}
            />
        </>
    )
}

export default Search;