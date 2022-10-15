import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/configureStore';
import App from '../../App';

it('Check if Item component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
