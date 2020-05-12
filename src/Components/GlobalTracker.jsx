import React from 'react';
import {Row, Col, Card, Tooltip, Typography} from 'antd';
import CountUp from 'react-countup';

const{ Text } = Typography;

class GlobalTracker extends React.Component{
    
    render(){
        let data = this.props.data;
        
        if(!data){
            console.log("data not fetched yet");
            return ("Loading..");
        }
        let activeCases = data.confirmed.value - data.recovered.value - data.deaths.value;
        return(
            <div>
                {/* <h3>Global Tracker {data.confirmed.value.toString()}</h3> */}
                {/* <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                    Global Tracker
                </Divider> */}
                <Row justify="center"><Text type="secondary">Last Updated on: &nbsp;&nbsp; {new Date(data.lastUpdate).toDateString()}</Text><br/><br/></Row>
                <Row gutter={12} justify="center">
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Confirmed Cases" placement="left">
                            <Card title="Confirmed Cases">
                                <CountUp start={0} end ={data.confirmed.value} duration={2.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Active Cases" placement="bottom">
                            <Card title="Active">
                                <CountUp start={0} end ={activeCases} duration={2.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Total Recovered" placement="bottom">
                            <Card title="Recovered">
                                <CountUp start={0} end ={data.recovered.value} duration={2.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Total Deaths" placement="right">
                            <Card title="Deceased">
                                <CountUp start={0} end ={data.deaths.value} duration={2.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GlobalTracker;