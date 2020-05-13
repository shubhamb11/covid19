import React from 'react';
// import {Row, Col, Card, Tooltip, Typography} from 'antd';
// import CountUp from 'react-countup';
import CardGroup from './CardGroup';
import StateMetaCard from './StateMetaCard';
import { Spin } from 'antd';

// const{ Text } = Typography;

class GlobalTracker extends React.Component{
    
    render(){
        let data = this.props.data;
        
        if(!data){
            return (<Spin size="large" />);
        }
        return(
            <div>
                <CardGroup data={data} />
                {/* <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }} /> */}
                <StateMetaCard data={data}/>
            </div>
        );
    }
}

export default GlobalTracker;