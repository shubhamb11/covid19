import React from 'react';
import CardGroup from './CardGroup';
import StateMetaCard from './StateMetaCard';
import { Divider } from 'antd';

class CityTracker extends React.Component{
    render(){
        let data = this.props.data;
        
        if(!data){
            return ("Loading..");
        }
        
        // console.log(data);
        return(
            <div>
                <div>{data.statenotes}</div>
                <CardGroup data={data} />
                <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }} />
                <StateMetaCard data={data}/>
            </div>
        );
    }
}

export default CityTracker;