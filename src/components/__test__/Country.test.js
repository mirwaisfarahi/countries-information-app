import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Country from '../Country';
import store from '../../redux/store/configureStore';
import '@testing-library/jest-dom';

const countries = [
  {
    name: 'Iraq',
    capital: 'Bagdad',
    flag: 'https//flag',
    timezone: 'utc+1',
  },
  {
    name: 'Iraq',
    capital: 'Bagdad',
    flag: 'https//flag',
    timezone: 'utc+1',
  },
];

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Country countries={countries} />
        ,
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
