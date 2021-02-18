import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './Router';
import axios from './axios/axios';

React.$axios = axios;
ReactDOM.render(
<BasicRoute/>,
  document.getElementById('root')
);

