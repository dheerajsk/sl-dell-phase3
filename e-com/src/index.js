import React from 'react';
import ReactDOM from 'react-dom';
import Login from './admin/login/Login';
import App from './App';
import './index.css';
import ListProduct from './product/list-product/ListProduct';
import ProductForm from './product/product-form/ProductForm';
import {BrowserRouter} from 'react-router-dom';


// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
