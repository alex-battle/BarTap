import React from 'react';
import {Route} from 'react-router-dom'
import Cities from './Cities'
import BarsList from './new york/BarsList';
import AllResults from './new york/AllResults';
import LoungeResults from './new york/LoungeResults'
import CocktailResults from './new york/CocktailResults'
import SportsResults from './new york/SportsResults'
import HookahResults from './new york/HookahResults'
import DiveResults from './new york/DiveResults'
import WhiskeyResults from './new york/WhiskeyResults'


function Main(props){
    console.log(props)
    return(
        <div>
            <Route exact path="/">
                <Cities/>
            </Route>
            <Route exact path="/newyork">
                <BarsList/>
            </Route>
            <Route exact path="/newyork/all">
                <AllResults allnylist={props.allnylist} />
            </Route>
            <Route exact path="/newyork/lounges">
                <LoungeResults nylounges={props.nylounges} />
            </Route>
            <Route exact path="/newyork/cocktail">
                <CocktailResults nycocktail={props.nycocktail} />
            </Route>
            <Route exact path="/newyork/sportsbar">
                <SportsResults nysportsbar={props.nysportsbar} />
            </Route>
            <Route exact path="/newyork/hookahbar">
                <HookahResults nyhookah={props.nyhookah} />
            </Route>
            <Route exact path="/newyork/divebar">
                <DiveResults nydivebar={props.nydivebar} />
            </Route>
            <Route exact path="/newyork/whiskeybar">
                <WhiskeyResults nywhiskeybar={props.nywhiskeybar} />
            </Route>
        </div>
    )
}
export default Main;