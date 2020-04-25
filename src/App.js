import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main';
import {barsNYList} from './services/ApiHelper'

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      list:[]
     };
  }

  // Render and Handle Change
  
  // all bar lists
  async componentDidMount(){
    let response = await barsNYList()
    this.setState({
      list: response.data
    })
    console.log(response)
  }
  async handleAllNYClick(e){
    let allNYBars = await barsNYList()
    this.setState({
      allNY: allNYBars.data.response.venues
    })
  }


  render() {
    return (
      <div className="bartap">
      <NavBar/>
      <Main />
    </div>
    );
  }
}

export default App;
