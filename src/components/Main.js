import React from 'react';
import {Route} from 'react-router-dom'
import Cities from './Cities'
import NYBarsList from './NY/BarsList';
import NYAllResults from './NY/AllResults';
import NYLoungeResults from './NY/LoungeResults'
import NYCocktailResults from './NY/CocktailResults'
import NYSportsResults from './NY/SportsResults'
import NYHookahResults from './NY/HookahResults'
import NYDiveResults from './NY/DiveResults'
import NYWhiskeyResults from './NY/WhiskeyResults'
import DCBarsList from './DC/BarsList';
import DCAllResults from './DC/AllResults';
import DCLoungeResults from './DC/LoungeResults'
import DCCocktailResults from './DC/CocktailResults'
import DCSportsResults from './DC/SportsResults'
import DCHookahResults from './DC/HookahResults'
import DCDiveResults from './DC/DiveResults'
import DCWhiskeyResults from './DC/WhiskeyResults'
import ATLBarsList from './ATL/BarsList';
import ATLAllResults from './ATL/AllResults';
import ATLLoungeResults from './ATL/LoungeResults'
import ATLCocktailResults from './ATL/CocktailResults'
import ATLSportsResults from './ATL/SportsResults'
import ATLHookahResults from './ATL/HookahResults'
import ATLDiveResults from './ATL/DiveResults'
import ATLWhiskeyResults from './ATL/WhiskeyResults'
import HOUBarsList from './HOU/BarsList';
import HOUAllResults from './HOU/AllResults';
import HOULoungeResults from './HOU/LoungeResults'
import HOUCocktailResults from './HOU/CocktailResults'
import HOUSportsResults from './HOU/SportsResults'
import HOUHookahResults from './HOU/HookahResults'
import HOUDiveResults from './HOU/DiveResults'
import HOUWhiskeyResults from './HOU/WhiskeyResults'
import LABarsList from './LA/BarsList';
import LAAllResults from './LA/AllResults';
import LALoungeResults from './LA/LoungeResults'
import LACocktailResults from './LA/CocktailResults'
import LASportsResults from './LA/SportsResults'
import LAHookahResults from './LA/HookahResults'
import LADiveResults from './LA/DiveResults'
import LAWhiskeyResults from './LA/WhiskeyResults'
import MIABarsList from './MIA/BarsList';
import MIAAllResults from './MIA/AllResults';
import MIALoungeResults from './MIA/LoungeResults'
import MIACocktailResults from './MIA/CocktailResults'
import MIASportsResults from './MIA/SportsResults'
import MIAHookahResults from './MIA/HookahResults'
import MIADiveResults from './MIA/DiveResults'
import MIAWhiskeyResults from './MIA/WhiskeyResults'
import NOBarsList from './NO/BarsList';
import NOAllResults from './NO/AllResults';
import NOLoungeResults from './NO/LoungeResults'
import NOCocktailResults from './NO/CocktailResults'
import NOSportsResults from './NO/SportsResults'
import NOHookahResults from './NO/HookahResults'
import NODiveResults from './NO/DiveResults'
import NOWhiskeyResults from './NO/WhiskeyResults'
import PHXBarsList from './PHX/BarsList';
import PHXAllResults from './PHX/AllResults';
import PHXLoungeResults from './PHX/LoungeResults'
import PHXCocktailResults from './PHX/CocktailResults'
import PHXSportsResults from './PHX/SportsResults'
import PHXHookahResults from './PHX/HookahResults'
import PHXDiveResults from './PHX/DiveResults'
import PHXWhiskeyResults from './PHX/WhiskeyResults'


function Main(props){
    console.log(props)
    return(
        <div>
            <Route exact path="/">
                <Cities/>
            </Route>
            <Route exact path="/newyork">
                <NYBarsList/>
            </Route>
            <Route exact path="/washingtondc">
                <DCBarsList/>
            </Route>
            <Route exact path="/atlanta">
                <ATLBarsList/>
            </Route>
            <Route exact path="/houston">
                <HOUBarsList/>
            </Route>
            <Route exact path="/losangeles">
                <LABarsList/>
            </Route>
            <Route exact path="/miami">
                <MIABarsList/>
            </Route>
            <Route exact path="/neworleans">
                <NOBarsList/>
            </Route>
            <Route exact path="/phoenix">
                <PHXBarsList/>
            </Route>
            <Route exact path="/newyork/all">
                <NYAllResults allnylist={props.allnylist} />
            </Route>
            <Route exact path="/newyork/lounges">
                <NYLoungeResults nylounges={props.nylounges} />
            </Route>
            <Route exact path="/newyork/cocktail">
                <NYCocktailResults nycocktail={props.nycocktail} />
            </Route>
            <Route exact path="/newyork/sportsbar">
                <NYSportsResults nysportsbar={props.nysportsbar} />
            </Route>
            <Route exact path="/newyork/hookahbar">
                <NYHookahResults nyhookah={props.nyhookah} />
            </Route>
            <Route exact path="/newyork/divebar">
                <NYDiveResults nydivebar={props.nydivebar} />
            </Route>
            <Route exact path="/newyork/whiskeybar">
                <NYWhiskeyResults nywhiskeybar={props.nywhiskeybar} />
            </Route>

            <Route exact path="/washingtondc/all">
                <DCAllResults alldclist={props.alldclist} />
            </Route>
            <Route exact path="/washingtondc/lounges">
                <DCLoungeResults dclounges={props.dclounges} />
            </Route>
            <Route exact path="/washingtondc/cocktail">
                <DCCocktailResults dccocktail={props.dccocktail} />
            </Route>
            <Route exact path="/washingtondc/sportsbar">
                <DCSportsResults dcsportsbar={props.dcsportsbar} />
            </Route>
            <Route exact path="/washingtondc/hookahbar">
                <DCHookahResults dchookah={props.dchookah} />
            </Route>
            <Route exact path="/washingtondc/divebar">
                <DCDiveResults dcdivebar={props.dcdivebar} />
            </Route>
            <Route exact path="/washingtondc/whiskeybar">
                <DCWhiskeyResults dcwhiskeybar={props.dcwhiskeybar} />
            </Route>
            <Route exact path="/atlanta/all">
                <ATLAllResults allatllist={props.allatllist} />
            </Route>
            <Route exact path="/atlanta/lounges">
                <ATLLoungeResults atllounges={props.atllounges} />
            </Route>
            <Route exact path="/atlanta/cocktail">
                <ATLCocktailResults atlcocktail={props.atlcocktail} />
            </Route>
            <Route exact path="/atlanta/sportsbar">
                <ATLSportsResults atlsportsbar={props.atlsportsbar} />
            </Route>
            <Route exact path="/atlanta/hookahbar">
                <ATLHookahResults atlhookah={props.atlhookah} />
            </Route>
            <Route exact path="/atlanta/divebar">
                <ATLDiveResults atldivebar={props.atldivebar} />
            </Route>
            <Route exact path="/atlanta/whiskeybar">
                <ATLWhiskeyResults atlwhiskeybar={props.atlwhiskeybar} />
            </Route>
            <Route exact path="/houston/all">
                <HOUAllResults allhoulist={props.allhoulist} />
            </Route>
            <Route exact path="/houston/lounges">
                <HOULoungeResults houlounges={props.houlounges} />
            </Route>
            <Route exact path="/houston/cocktail">
                <HOUCocktailResults houcocktail={props.houcocktail} />
            </Route>
            <Route exact path="/houston/sportsbar">
                <HOUSportsResults housportsbar={props.housportsbar} />
            </Route>
            <Route exact path="/houston/hookahbar">
                <HOUHookahResults houhookah={props.houhookah} />
            </Route>
            <Route exact path="/houston/divebar">
                <HOUDiveResults houdivebar={props.houdivebar} />
            </Route>
            <Route exact path="/houston/whiskeybar">
                <HOUWhiskeyResults houwhiskeybar={props.houwhiskeybar} />
            </Route>
            <Route exact path="/losangeles/all">
                <LAAllResults alllalist={props.alllalist} />
            </Route>
            <Route exact path="/losangeles/lounges">
                <LALoungeResults lalounges={props.lalounges} />
            </Route>
            <Route exact path="/losangeles/cocktail">
                <LACocktailResults lacocktail={props.lacocktail} />
            </Route>
            <Route exact path="/losangeles/sportsbar">
                <LASportsResults lasportsbar={props.lasportsbar} />
            </Route>
            <Route exact path="/losangeles/hookahbar">
                <LAHookahResults lahookah={props.lahookah} />
            </Route>
            <Route exact path="/losangeles/divebar">
                <LADiveResults ladivebar={props.ladivebar} />
            </Route>
            <Route exact path="/losangeles/whiskeybar">
                <LAWhiskeyResults lawhiskeybar={props.lawhiskeybar} />
            </Route>
            <Route exact path="/miami/all">
                <MIAAllResults allmialist={props.allmialist} />
            </Route>
            <Route exact path="/miami/lounges">
                <MIALoungeResults mialounges={props.mialounges} />
            </Route>
            <Route exact path="/miami/cocktail">
                <MIACocktailResults miacocktail={props.miacocktail} />
            </Route>
            <Route exact path="/miami/sportsbar">
                <MIASportsResults miasportsbar={props.miasportsbar} />
            </Route>
            <Route exact path="/miami/hookahbar">
                <MIAHookahResults miahookah={props.miahookah} />
            </Route>
            <Route exact path="/miami/divebar">
                <MIADiveResults miadivebar={props.miadivebar} />
            </Route>
            <Route exact path="/miami/whiskeybar">
                <MIAWhiskeyResults miawhiskeybar={props.miawhiskeybar} />
            </Route>
            <Route exact path="/neworleans/all">
                <NOAllResults allnolist={props.allnolist} />
            </Route>
            <Route exact path="/neworleans/lounges">
                <NOLoungeResults nolounges={props.nolounges} />
            </Route>
            <Route exact path="/neworleans/cocktail">
                <NOCocktailResults nococktail={props.nococktail} />
            </Route>
            <Route exact path="/neworleans/sportsbar">
                <NOSportsResults nosportsbar={props.nosportsbar} />
            </Route>
            <Route exact path="/neworleans/hookahbar">
                <NOHookahResults nohookah={props.nohookah} />
            </Route>
            <Route exact path="/neworleans/divebar">
                <NODiveResults nodivebar={props.nodivebar} />
            </Route>
            <Route exact path="/neworleans/whiskeybar">
                <NOWhiskeyResults nowhiskeybar={props.nowhiskeybar} />
            </Route>
            <Route exact path="/phoenix/all">
                <PHXAllResults allphxlist={props.allphxlist} />
            </Route>
            <Route exact path="/phoenix/lounges">
                <PHXLoungeResults phxlounges={props.phxlounges} />
            </Route>
            <Route exact path="/phoenix/cocktail">
                <PHXCocktailResults phxcocktail={props.phxcocktail} />
            </Route>
            <Route exact path="/phoenix/sportsbar">
                <PHXSportsResults phxsportsbar={props.phxsportsbar} />
            </Route>
            <Route exact path="/phoenix/hookahbar">
                <PHXHookahResults phxhookah={props.phxhookah} />
            </Route>
            <Route exact path="/phoenix/divebar">
                <PHXDiveResults phxdivebar={props.phxdivebar} />
            </Route>
            <Route exact path="/phoenix/whiskeybar">
                <PHXWhiskeyResults phxwhiskeybar={props.phxwhiskeybar} />
            </Route>
        </div>
    )
}
export default Main;