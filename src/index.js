import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicRoute from './Router';
import {RecoilRoot} from "recoil";

ReactDOM.render(
    <RecoilRoot>
        <BasicRoute/>
    </RecoilRoot>,
  document.getElementById('root')
);

