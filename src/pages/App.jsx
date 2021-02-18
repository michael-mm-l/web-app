import React from 'react'
import {RecoilRoot} from 'recoil'
import Header from '../components/header';
import Custom from '../components/custom';
import Custom1 from '../components/custom1';

export default class App extends React.Component{

  render(){
    return (
      <RecoilRoot>
          <Header/>
          <Custom/>
          <Custom1/>
      </RecoilRoot>
      
    );
  }
  
}

