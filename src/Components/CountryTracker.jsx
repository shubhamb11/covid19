import React from 'react';

class CountryTracker extends React.Component{
    render(){
        // console.log("data",this.props.data);
        return(
            <div>{this.props.country} Tracker </div>
        );
    }
}

export default CountryTracker;