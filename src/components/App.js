
import React from "react";
import { Provider } from 'react-redux';
import store from '../redux/store';
import LoremComponent from './LoremComponent';
import './../styles/App.css';


const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1>Lorem Redux</h1>
      <LoremComponent />
    </div>
  </Provider>
);

export default App
