import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main';
import {barsNYList, loungesNYList, cocktailNYList, sportsBarNYList, hookahNYList, diveBarNYList, whiskeyNYList, barsATLList, loungesATLList, cocktailATLList, sportsBarATLList, hookahATLList, diveBarATLList, whiskeyATLList, barsDCList, loungesDCList, cocktailDCList, sportsBarDCList, hookahDCList, diveBarDCList, whiskeyDCList, barsHOUList, loungesHOUList, cocktailHOUList, sportsBarHOUList, hookahHOUList, diveBarHOUList, whiskeyHOUList, barsLAList, loungesLAList, cocktailLAList, sportsBarLAList, hookahLAList, diveBarLAList, whiskeyLAList, barsMIAList, loungesMIAList, cocktailMIAList, sportsBarMIAList, hookahMIAList, diveBarMIAList, whiskeyMIAList, barsNOList, loungesNOList, cocktailNOList, sportsBarNOList, hookahNOList, diveBarNOList, whiskeyNOList, barsPHXList, loungesPHXList, cocktailPHXList, sportsBarPHXList, hookahPHXList, diveBarPHXList, whiskeyPHXList} from './services/ApiHelper'

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      list:[],
     };

  }

  // Render and Handle Change
  
  async componentDidMount(e){
    // all bar lists
    let responseNY = await barsNYList()
    this.setState({
      allnylist: responseNY.data
    })
    let responseATL = await barsATLList()
    this.setState({
      allatllist: responseATL.data
    })
    let responseDC = await barsDCList()
    this.setState({
      alldclist: responseDC.data
    })
    let responseHOU = await barsHOUList()
    this.setState({
      allhoulist: responseHOU.data
    })
    let responseLA = await barsLAList()
    this.setState({
      alllalist: responseLA.data
    })
    let responseMIA = await barsMIAList()
    this.setState({
      allmialist: responseMIA.data
    })
    let responseNO = await barsNOList()
    this.setState({
      allnolist: responseNO.data
    })
    let responsePHX = await barsPHXList()
    this.setState({
      allphxlist: responsePHX.data
    })
  

  // all Lounges lists
    let responsNY = await loungesNYList()
    this.setState({
      nylounges: responsNY.data
    })
    let responsATL = await loungesATLList()
    this.setState({
      atllounges: responsATL.data
    })
    let responsDC = await loungesDCList()
    this.setState({
      dclounges: responsDC.data
    })
    let responsHOU = await loungesHOUList()
    this.setState({
      houlounges: responsHOU.data
    })
    let responsLA = await loungesLAList()
    this.setState({
      lalounges: responsLA.data
    })
    let responsMIA = await loungesMIAList()
    this.setState({
      mialounges: responsMIA.data
    })
    let responsNO = await loungesNOList()
    this.setState({
      nolounges: responsNO.data
    })
    let responsPHX = await loungesPHXList()
    this.setState({
      phxlounges: responsPHX.data
    })
  
  // all Cocktail
    let responNY = await cocktailNYList()
    this.setState({
      nycocktail: responNY.data
    })
    let responATL = await cocktailATLList()
    this.setState({
      atlcocktail: responATL.data
    })
    let responDC = await cocktailDCList()
    this.setState({
      dccocktail: responDC.data
    })
    let responHOU = await cocktailHOUList()
    this.setState({
      houcocktail: responHOU.data
    })
    let responLA = await cocktailLAList()
    this.setState({
      lacocktail: responLA.data
    })
    let responMIA = await cocktailMIAList()
    this.setState({
      miacocktail: responMIA.data
    })
    let responNO = await cocktailNOList()
    this.setState({
      nococktail: responNO.data
    })
    let responPHX = await cocktailPHXList()
    this.setState({
      phxcocktail: responPHX.data
    })

  // all Sportsbar
    let respoNY = await sportsBarNYList()
    this.setState({
      nysportsbar: respoNY.data
    })
    let respoATL = await sportsBarATLList()
    this.setState({
      atlsportsbar: respoATL.data
    })
    let respoDC = await sportsBarDCList()
    this.setState({
      dcsportsbar: respoDC.data
    })
    let respoHOU = await sportsBarHOUList()
    this.setState({
      housportsbar: respoHOU.data
    })
    let respoLA = await sportsBarLAList()
    this.setState({
      lasportsbar: respoLA.data
    })
    let respoMIA = await sportsBarMIAList()
    this.setState({
      miasportsbar: respoMIA.data
    })
    let respoNO = await sportsBarNOList()
    this.setState({
      nosportsbar: respoNO.data
    })
    let respoPHX = await sportsBarPHXList()
    this.setState({
      phxsportsbar: respoPHX.data
    })

  // all hookah
    let respNY = await hookahNYList()
    this.setState({
      nyhookah: respNY.data
    })
    let respATL = await hookahATLList()
    this.setState({
     atlhookah: respATL.data
    })
    let respDC = await hookahDCList()
    this.setState({
      dchookah: respDC.data
    })
    let respHOU = await hookahHOUList()
    this.setState({
      houhookah: respHOU.data
    })
    let respLA = await hookahLAList()
    this.setState({
      lahookah: respLA.data
    })
    let respMIA = await hookahMIAList()
    this.setState({
      miahookah: respMIA.data
    })
    let respNO = await hookahNOList()
    this.setState({
      nohookah: respNO.data
    })
    let respPHX = await hookahPHXList()
    this.setState({
      phxhookah: respPHX.data
    })

  // all divebar
    let resNY = await diveBarNYList()
    this.setState({
      nydivebar: resNY.data
    })
    let resATL = await diveBarATLList()
    this.setState({
      atldivebar: resATL.data
    })
    let resDC = await diveBarDCList()
    this.setState({
      dcdivebar: resDC.data
    })
    let resHOU = await diveBarHOUList()
    this.setState({
      houdivebar: resHOU.data
    })
    let resLA = await diveBarLAList()
    this.setState({
      ladivebar: resLA.data
    })
    let resMIA = await diveBarMIAList()
    this.setState({
      miadivebar: resMIA.data
    })
    let resNO = await diveBarNOList()
    this.setState({
      nodivebar: resNO.data
    })
    let resPHX = await diveBarPHXList()
    this.setState({
      phxdivebar: resPHX.data
    })

    // all whiskey bar
    let rspnsNY = await whiskeyNYList()
    this.setState({
      nywhiskeybar: rspnsNY.data
    })
    let rspnsATL = await whiskeyATLList()
    this.setState({
      atlwhiskeybar: rspnsATL.data
    })
    let rspnsDC = await whiskeyDCList()
    this.setState({
      dcwhiskeybar: rspnsDC.data
    })
    let rspnsHOU = await whiskeyHOUList()
    this.setState({
      houwhiskeybar: rspnsHOU.data
    })
    let rspnsLA = await whiskeyLAList()
    this.setState({
      lawhiskeybar: rspnsLA.data
    })
    let rspnsMIA = await whiskeyMIAList()
    this.setState({
      miawhiskeybar: rspnsMIA.data
    })
    let rspnsNO = await whiskeyNOList()
    this.setState({
      nowhiskeybar: rspnsNO.data
    })
    let rspnsPHX = await whiskeyPHXList()
    this.setState({
      phxwhiskeybar: rspnsPHX.data
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
