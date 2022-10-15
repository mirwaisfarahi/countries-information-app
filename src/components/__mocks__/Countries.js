import React, { useEffect, useState } from 'react';

export const fetchCountriesFromApi = () => fetch('https://restcountries.com/v3.1/name/kenya').then((resp) => {
  if (resp.status === 200) return resp.json();
  throw new Error('Invalid Response');
});

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCountriesFromApi()
      .then((data) => setCountries(data.results))
      .catch(() => setError(true));
  }, []);

  return error ? (
    <div data-testid="fetch-error">Unable To fetch data</div>
  ) : (
    <div data-testid="fetch-success">
      {countries.map((country) => (
        <h2 key={country.id}>
          {country.cca2}
        </h2>
      ))}
    </div>
  );
};

export default Countries;
