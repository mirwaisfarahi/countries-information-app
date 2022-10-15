import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import HomePage from './components/HomePage';
import Header from './components/Header';
import './App.css';
import './index.css';
import DetailsPage from './components/DetailsPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
