import React from 'react';
import { Link } from 'react-router-dom'

function BarsList() {
    return (
        <div className="barslist">
            <div className="NYbarslist-allBars">
                <div className="NYbarslist-allBars-all">
                    <Link to="/houston/all">All Bars</Link>
                </div>
            </div>
            <div className="NYbarslist-row1">
                <div className="NYbarslist-row1-lounges">         
                    <Link to="/houston/lounges">Lounges</Link>
                </div>
                <div className="NYbarslist-row1-cocktail">
                    <Link to="/houston/cocktail">Cocktail</Link>
                </div>
                <div className="NYbarslist-row1-sportsbar">
                    <Link to="/houston/sportbar">Sports Bar</Link>
                </div>
            </div>
            <div className="NYbarslist-row2">
                <div className="NYbarslist-row2-hookah">
                    <Link to="/houston/hookahbar">Hookah Bar</Link>
                </div>
                <div className="NYbarslist-row2-dive">
                    <Link to="/houston/divebar">Dive Bar</Link>
                </div>
                <div className="NYbarslist-row2-whiskey">
                    <Link to="/houston/whiskeybar">Whiskey Bar</Link>
                </div>
            </div>
        </div>
    )
}
export default BarsList;