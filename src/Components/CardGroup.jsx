import React from 'react';
import {Row, Col, Card, Tooltip, Typography} from 'antd';
import CountUp from 'react-countup';

const{ Text } = Typography;

const CardGroup = (value) => {
    let data = value.data;
    if(!data){
        return ("Loading..");
    }
    return(
        <div>
                {/* <h3>Global Tracker {data.confirmed.value.toString()}</h3> */}
                {/* <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
                    Global Tracker
                </Divider> */}
                {/* <Row justify="center"><Text type="secondary">Last Updated on: &nbsp;&nbsp; {new Date(data.lastupdatedtime).toDateString()} */}
                {/* </Text><br/><br/></Row> */}
                <Row gutter={12} justify="center">
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Confirmed Cases" placement="left">
                            <Card size="small" title="Confirmed Cases">
                                {data.deltaconfirmed && <p>[+{data.deltaconfirmed}]</p>}
                                <CountUp start={0} end ={parseInt(data.confirmed)} duration={1.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Active Cases" placement="bottom">
                            <Card size="small" title="Active">
                                <CountUp start={0} end ={parseInt(data.active)} duration={1.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Total Recovered" placement="bottom">
                            <Card size="small" title="Recovered">
                                {data.deltarecovered && <p>[+{data.deltarecovered}]</p>}
                                <CountUp start={0} end ={parseInt(data.recovered)} duration={1.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Tooltip title="Total Deaths" placement="right">
                            <Card size="small" title="Deceased">
                                {data.deltadeaths && <p>[+{data.deltadeaths}]</p>}
                                <CountUp start={0} end ={parseInt(data.deaths)} duration={1.5} separator=","></CountUp>
                            </Card>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
    );
}


export default CardGroup;