import React from 'react';
import ReactList from 'react-list'

function AllResults(props) {
    const data = (props.alllalist && props.alllalist.response)
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
        <div className="allNYResults" id="container">
            <div className="allNYResults-title" id="container-title">
                All Bars
            </div>
            <div className="allNYResults-data" id="container-data">
                <div className="allNYResults-data-list" id="container-data-list">
                    <h1>{renderVenue}</h1>
                </div>
                <div className="allNYResults-data-map" id="container-data-map">
                    Map
            </div>
            </div>
        </div>
    )
}

export default AllResults;