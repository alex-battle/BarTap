import React from 'react';
import { Link } from 'react-router-dom'

function BarsList() {
    return (
        <div className="barslist">
            <div className="NYbarslist-allBars">
                <div className="NYbarslist-allBars-all">
                    <Link to="/miami/all">All Bars</Link>
                </div>
            </div>
            <div className="NYbarslist-row1">
                <div className="NYbarslist-row1-lounges">         
                    <Link to="/miami/lounges">Lounges</Link>
                </div>
                <div className="NYbarslist-row1-cocktail">
                    <Link to="/miami/cocktail">Cocktail</Link>
                </div>
                <div className="NYbarslist-row1-sportsbar">
                    <Link to="/miami/sportbar">Sports Bar</Link>
                </div>
            </div>
            <div className="NYbarslist-row2">
                <div className="NYbarslist-row2-hookah">
                    <Link to="/miami/hookahbar">Hookah Bar</Link>
                </div>
                <div className="NYbarslist-row2-dive">
                    <Link to="/miami/divebar">Dive Bar</Link>
                </div>
                <div className="NYbarslist-row2-whiskey">
                    <Link to="/miami/whiskeybar">Whiskey Bar</Link>
                </div>
            </div>
        </div>
    )
}
export default BarsList;