import React from 'react';

function WhiskeyResults(props){
    const data = (props.nywhiskeybar && props.nywhiskeybar.response)
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
        <div id="container">
            <div id="container-title">
                All Bars
            </div>
            <div id="container-data">
                <div id="container-data-list">
                    {renderVenue}
                </div>
                <div id="container-data-map">
                    Map
                </div>
            </div>
        </div>
    )
}
export default WhiskeyResults;