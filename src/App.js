import React from 'react';
import Nav from './component/Nav/Nav'
import './App.css';

//components
  //Nav bar 
  //title 
  //update
  //dish spotlight
  //spotlight dish 
  //social bar
  //phone app bar
  //story links (4 pack)
  //contact links 
  //legal stuff

class App extends React.Component{
  constructor(){
    super();
    this.state = {}
  }
  render(){
    return(
      <div>
        <Nav/>
      </div>
    )
  }
}
export default App;
