import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import DetailsPage from '../DetailsPage';
import store from '../../redux/store/configureStore';
import '@testing-library/jest-dom';

it('Check if Item component has changed', () => {
  const country = {
    name: 'Iraq',
    capital: 'Bagdad',
    flag: 'https//flag',
    timezone: 'utc+1',
  };

  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <DetailsPage country={country} />
        ,
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
