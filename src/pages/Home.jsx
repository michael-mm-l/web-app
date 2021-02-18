import React from 'react'
import {RecoilRoot} from 'recoil'
import Header from '../components/header';

export default class Home extends React.Component{

  constructor(porps){
    super(porps)
    this.state={
    }
  }

  render(){
    return (
      <RecoilRoot>
            <Header/>
      </RecoilRoot>
      
    );
  }
  
}

