export const fetchSpotlight = (text, id) => ({
  type: 'FETCH_SPOTLIGHT',
  text,
  id,
});

export const fetchCountry = (id) => ({
  type: 'FETCH_COUNTRY',
  id,
});

export const fetchCountries = () => ({
  type: 'FETCH_COUNTRIES',
});
