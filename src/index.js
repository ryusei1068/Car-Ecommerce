import React from "react";
import reactDom from "react-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CARS from "./components/cars";


reactDom.render(
    <App carList={CARS}/>,
    document.getElementById('root')
);
