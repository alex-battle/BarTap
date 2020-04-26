import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main';
import {barsNYList, loungesNYList, cocktailNYList, sportsBarNYList, hookahNYList, diveBarNYList, whiskeyNYList} from './services/ApiHelper'

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      list:[],
     };

  }

  // Render and Handle Change
  
  // all bar lists
  async componentDidMount(e){
    let responseNY = await barsNYList()
    this.setState({
      allnylist: responseNY.data
    })
  

  // all Lounges lists
    let responsNY = await loungesNYList()
    this.setState({
      nylounges: responsNY.data
    })
  
  // all Cocktail
    let responNY = await cocktailNYList()
    this.setState({
      nycocktail: responNY.data
    })
  
    let respoNY = await sportsBarNYList()
    this.setState({
      nysportsbar: respoNY.data
    })
  
    let respNY = await hookahNYList()
    this.setState({
      nyhookah: respNY.data
    })
  
    let resNY = await diveBarNYList()
    this.setState({
      nydivebar: resNY.data
    })
  
    let rspnsNY = await whiskeyNYList()
    this.setState({
      nywhiskeybar: rspnsNY.data
    })
  }

  render() {
    return (
      <div className="bartap">
      <NavBar/>
      <Main 
        allnylist={this.state.allnylist} 
        nylounges={this.state.nylounges}
        nycocktail={this.state.nycocktail}
        nysportsbar={this.state.nysportsbar}
        nyhookah={this.state.nyhookah}
        nydivebar={this.state.nydivebar}
        nywhiskeybar={this.state.nywhiskeybar}
      />
    </div>
    );
  }
}

export default App;
