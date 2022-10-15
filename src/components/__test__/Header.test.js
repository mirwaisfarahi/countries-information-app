import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../Header';
import store from '../../redux/store/configureStore';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        ,
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
