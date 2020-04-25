import React from 'react';
import {Route} from 'react-router-dom'
import Cities from './Cities'
import BarsList from './new york/BarsList';
import AllResults from './new york/WhiskeyResults';


function Main(){
    return(
        <div>
            <Route exact path="/"><Cities/></Route>
            <Route exact path="/newyork"><BarsList/></Route>
            <Route exact path="/newyork/all"><AllResults/></Route>
        </div>
    )
}
export default Main;