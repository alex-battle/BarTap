import React from 'react';
import {Link} from 'react-router-dom'

function Cities(){
    return(
        <div className="cities">
            <div className="cities-NY">
                <Link to= "/newyork">
                    New York
                </Link>
            </div>
            <div className="cities-DC">
                <Link to="/washingtonDC">Washington DC</Link>
            </div>
            <div className="cities-MIA">
                <Link to="/miami">Miami</Link>
            </div>
            <div className="cities-ATL">
                <Link to="/atlanta">Atlanta</Link>
            </div>
            <div className="cities-HOU">
                <Link to="/houston">Houston</Link>
            </div>
            <div className="cities-NO">
                <Link to="/neworleans">New Orleans</Link>
            </div>
            <div className="cities-PHX">
                <Link to="/phoenix">Phoenix</Link>
            </div>
            <div className="cities-LA">
                <Link to="/losangeles">Los Angeles</Link>
            </div>
        </div>
    )
}
export default Cities;