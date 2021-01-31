import './App.css';
import React from 'react'
import Header from '../components/header';

export default class App extends React.Component{

  constructor(porps){
    super(porps)
    this.state={
      arr : [
        {
          headerLabel:"首页",
          headerUrl:"#/"
        },
        {
          headerLabel:"首页",
          headerUrl:"#/"
        },
        {
          headerLabel:"首页",
          headerUrl:"#/"
        },
        {
          headerLabel:"首页",
          headerUrl:"#/"
        },
        {
          headerLabel:"首页",
          headerUrl:"#/"
        },
        {
          headerLabel:"首页",
          headerUrl:"#/"
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Header arr = {this.state.arr}/>
      </div>
    );
  }
  
}

