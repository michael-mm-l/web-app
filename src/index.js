import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './Router';
import axios from './axios/axios';
import {RecoilRoot} from "recoil";

React.$axios = axios;
ReactDOM.render(
    <RecoilRoot>
        <BasicRoute/>
    </RecoilRoot>,
  document.getElementById('root')
);

