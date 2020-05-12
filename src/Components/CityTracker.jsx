import React from 'react';

class CityTracker extends React.Component{
    render(){
        // console.log("data",this.props.data);
        return(
            <div>{this.props.city} Tracker </div>
        );
    }
}

export default CityTracker;