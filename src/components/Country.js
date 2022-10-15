import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import '../App.css';
import '../index.css';

const Country = (props) => {
  const { countries } = props;
  return (
    <div className="country-container">
      {countries.map((country) => (
        <div className="country-card" key={country.id}>
          <div className="flag-container">
            <img src={country.flags.svg} alt="Flag" className="flag-img" />
          </div>
          <div className="country-stats">
            <h3 className="country-name">{country.name.common}</h3>
            <h4 className="population">
              Population :
              {country.population}
            </h4>
          </div>
          <div className="detailsLink">
            <button className="detailsBtn" type="button">
              <Link to={`/details/${country.name.common}`} state={country.name.common}>
                <BsArrowRightCircle />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Country.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Country;
