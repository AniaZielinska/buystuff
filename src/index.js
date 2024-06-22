import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import InventoryItem from './InventoryItem';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title='BuyStuff' />
    <InventoryItem itemName='Shoe' price='5' />
    <InventoryItem itemName='Sock' price='3' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
