import React from 'react';
import CardGroup from './CardGroup';
import StateMetaCard from './StateMetaCard';
import { Spin } from 'antd';

class CountryTracker extends React.Component{
    render(){
        let data = this.props.data;
        
        if(!data){
            return (<Spin size="large" />);
        }
        console.log(data);
        
        return(
            <div>
                <CardGroup data={data} />
                {/* <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }} /> */}
                <StateMetaCard data={data}/>
            </div>
        );
    }
}

export default CountryTracker;