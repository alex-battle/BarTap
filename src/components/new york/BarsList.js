import React from 'react';
import { Link } from 'react-router-dom'

function BarsList() {
    return (
        <div className="barslist">
            <div className="NYbarslist-allBars">
                <div className="NYbarslist-allBars-all">
                    <Link to="/newyork/all">All Bars</Link>
                </div>
            </div>
            <div className="NYbarslist-row1">
                <div className="NYbarslist-row1-lounges">         
                    <Link to="/newyork/lounges">Lounges</Link>
                </div>
                <div className="NYbarslist-row1-cocktail">
                    <Link to="/newyork/cocktail">Cocktail</Link>
                </div>
                <div className="NYbarslist-row1-sportsbar">
                    <Link to="/newyork/sportbar">Sports Bar</Link>
                </div>
            </div>
            <div className="NYbarslist-row2">
                <div className="NYbarslist-row2-hookah">
                    <Link to="/newyork/hookah">Hookah Bar</Link>
                </div>
                <div className="NYbarslist-row2-dive">
                    <Link to="/newyork/divebar">Dive Bar</Link>
                </div>
                <div className="NYbarslist-row2-whiskey">
                    <Link to="/newyork/whiskey">Whiskey Bar</Link>
                </div>
            </div>
        </div>
    )
}
export default BarsList;