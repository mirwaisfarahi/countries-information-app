import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/country/country';
import { fetchCountrySpotlight } from '../redux/countrySpotlight/countrySpotlight';
import Country from './Country';
import '../App.css';
import '../index.css';

const HomePage = () => {
  const { countrySpotlight } = useSelector((state) => state.countrySpotlight);
  const { countriesList } = useSelector((state) => state.countries);
  const countriesInputRef = useRef();
  const dispatch = useDispatch();

  const [filter, setFilter] = useState(countriesList);

  const filterCountries = (e) => {
    const target = e.target.value;
    if (target === 'all') {
      setFilter(countriesList);
    } else {
      setFilter(countriesList.filter((el) => el.region === target));
    }
  };

  const filterCountriesByName = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const req = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`);
        const res = await req.json();
        setFilter(res);
      };
      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      setFilter(countriesList);
    }
  };

  useEffect(() => {
    dispatch(fetchCountrySpotlight());
    dispatch(fetchCountries());
    setFilter(null);
  }, [dispatch]);

  return (
    <div className="countries-container">
      {countrySpotlight.map((country) => (
        <div className="spotlight-card" key={country.id}>
          <div className="flag-spot-container">
            <img className="spot-flag" src={country.flags.svg} alt="Flag" />
          </div>
          <div className="spot-details">
            <h2 className="spot-name">{country.name.common}</h2>
            <h3 className="spot-capital">
              Capital City:
              {country.capital}
            </h3>
            <h3 className="spot-population">
              Population:
              {country.population}
            </h3>
          </div>
        </div>
      ))}
      <div className="population-stats">
        <input className="stats-search" type="text" ref={countriesInputRef} onChange={filterCountriesByName} />
        <select
          className="stats-select"
          name="drop-down"
          onChange={filterCountries}
        >
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <Country countries={filter || countriesList} />
    </div>
  );
};

export default HomePage;
