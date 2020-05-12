import React from 'react';
import { Row, Col, Card } from 'antd';
import { STATE_POPULATIONS } from '../constants';
import {formatNumber} from '../commonFunctions';


class StateMetaCard extends React.Component{
    render(){
        let data = this.props.data;
        let population = STATE_POPULATIONS[data.state];
        console.log(population);
        
        const confirmed = data.confirmed;
        const active = data.active;
        const deaths = data.deaths;
        const recovered = data.recovered;
        const confirmedPerMillion = (confirmed / population) * 1000000;
        const recoveryPercent = (recovered / confirmed) * 100;
        const activePercent = (active / confirmed) * 100;
        const deathPercent = (deaths / confirmed) * 100;
        // const testPerMillion = (lastTestObject?.totaltested / population) * 1000000;
        // const growthRate =
            // ((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100;
        // const totalConfirmedPerMillion =
        //     (totalData[0].confirmed / 1332900000) * 1000000;
        return(
            <div>
                <h3>{data.state} Population: {formatNumber(population)}</h3>
                <Row gutter={12} justify="center">
                    <Col flex={1} xs={10} md={3}>
                        <Card size="small" title="Confirmed Per Million">
                            <p>{Math.round(confirmedPerMillion)} out of every 1 million people in {data.state} have tested positive for the virus.
                            </p>
                        </Card>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Card size="small" title="Active">
                            <p>For every 100 confirmed cases, {activePercent.toFixed(0)} are currently infected.
                            </p>
                        </Card>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Card size="small" title="Recovery Rate">
                            <p>For every 100 confirmed cases, {Math.round(recoveryPercent.toFixed(0))} have recovered from the virus.
                            </p>
                        </Card>
                    </Col>
                    <Col flex={1} xs={10} md={3}>
                        <Card size="small" title="Mortality Rate">
                            <p>For every 100 confirmed cases, {Math.round(deathPercent.toFixed(0))} have unfortunately passed away from the virus.
                            </p>
                        </Card> 
                    </Col>
                </Row>
            </div>
            
        );
    }
}

export default StateMetaCard;