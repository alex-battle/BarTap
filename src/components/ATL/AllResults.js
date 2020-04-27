import React from 'react';
import ReactList from 'react-list'

function AllResults(props) {
    const data = (props.allatllist && props.allatllist.response)
    let renderVenue
    if (data !== undefined) {
        renderVenue = data.venues.map((venues) => {
            return (
                <div>                    
                        <h4>{venues.name}</h4>
                </div>
            )
        })
    }
    return (
        <div className="allatlResults" id="container">
            <div className="allatlResults-title" id="container-title">
                All Bars
            </div>
            <div className="allatlResults-data" id="container-data">
                <div className="allatlResults-data-list" id="container-data-list">
                    <h1>{renderVenue}</h1>
                </div>
                <div className="allatlResults-data-map" id="container-data-map">
                    Map
            </div>
            </div>
        </div>
    )
}

export default AllResults;