import React from 'react';
import {Row, Col, Card, Tooltip, Typography, Spin, notification} from 'antd';
import CountUp from 'react-countup';
import { InfoCircleOutlined } from '@ant-design/icons';

const{ Text } = Typography;

const CardGroup = (value) => {
    let data = value.data;
    if(!data){
        return (
            <Spin size="large" />
        );
    }
    const openNotificationWithIcon = type => {
        notification[type]({
            style:{
                width:300,
                marginLeft:90,
            },
            message: data.state,
            description: <div className="txt" dangerouslySetInnerHTML={{ __html: data.statenotes }} />
        });
    };
    

    return(
        <div className="card-group">
                {/* <h3>Global Tracker {data.confirmed.value.toString()}</h3> */}
                {/* <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                    Global Tracker
                </Divider> */}
                <Row justify="center"><Text className="txt" type="secondary">Last Updated on: &nbsp;&nbsp; {new Date(data.lastupdatedtime).toDateString()} 
                &nbsp;<InfoCircleOutlined onClick={() => openNotificationWithIcon('success')} />
                </Text><br/><br/></Row>
                <Row gutter={12} justify="center">
                    <Col xs={10} md={3} className="confirmed meta-item">
                        <Tooltip title="Confirmed Cases" placement="left">
                            <Card size="small" bordered={false} >
                                <h4 className="title">Confirmed Cases</h4>
                                {data.deltaconfirmed !==0 && <p>[+{data.deltaconfirmed}]</p>}
                                <p><CountUp start={0} end ={parseInt(data.confirmed)} duration={1.5} separator=","></CountUp></p>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col xs={10} md={3} className="active meta-item">
                        <Tooltip title="Active Cases" placement="bottom">
                            <Card size="small" bordered={false} >
                                <h4 className="title">Active</h4>
                                <p><CountUp start={0} end ={parseInt(data.active)} duration={1.5} separator=","></CountUp></p>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col xs={10} md={3} className="recovered meta-item">
                        <Tooltip title="Total Recovered" placement="bottom">
                            <Card size="small" bordered={false} >
                                <h4 className="title">Recovered</h4>
                                {data.deltarecovered !== 0 && <p>[+{data.deltarecovered}]</p>}
                                <p><CountUp start={0} end ={parseInt(data.recovered)} duration={1.5} separator=","></CountUp></p>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col xs={10} md={3} className="deaths meta-item">
                        <Tooltip title="Total Deaths" placement="right">
                            <Card size="small" bordered={false} >
                                <h4 className="title">Deceased</h4>
                                {data.deltadeaths !== 0 && <p>[+{data.deltadeaths}]</p>}
                                <p><CountUp start={0} end ={parseInt(data.deaths)} duration={1.5} separator=","></CountUp></p>
                            </Card>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
    );
}


export default CardGroup;