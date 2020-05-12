import React from "react";
import axios from "axios";
import { Tabs } from "antd";

import CityTracker from "./CityTracker";
import CountryTracker from "./CountryTracker";
import GlobalTracker from "./GlobalTracker";



const { TabPane } = Tabs;

const fetchingData = async (key) => {
    let url = "";
    let fetchedData;
    switch (parseInt(key)) {
        case 1:
            await console.log(1);
            fetchedData = "fetch city data";
            break;
        case 2:
            await console.log(2);
            fetchedData = "fetch country data";
            break;
        case 3:
            url = "https://covid19.mathdro.id/api";
            try {
                let { data }  = await axios.get(url);
                fetchedData = data;
            } catch (error) {
                
            }

            break;
        default:
            break;
    }
    // console.log("returin",fetchedData);
    
    return fetchedData;
}

class CustomTabs extends React.Component {
    
    state = {
    };

    // constructor(props){
    //     super(props);
    // }

    setData(data){
        this.setState({
            data:data,
        })
    }

    async fetchRenderedData(key){
        this.setData(undefined);
        const renderedData = await fetchingData(key);
        // console.log(key,renderedData);
        
        this.setData(renderedData);    
    }

    componentDidMount(){
        this.fetchRenderedData(3);
    }

    render(){
        let data = this.state.data;
        return(
            <Tabs style={{marginTop: 20}}tabBarGutter={50} defaultActiveKey="3" onChange={(key)=>this.fetchRenderedData(key)} size="large" destroyInactiveTabPane="false" animated={false}>
                <TabPane tab="Delhi" key="1">
                    <CityTracker city="Delhi" data={data} />
                </TabPane>
                <TabPane tab="India" key="2">
                    <CountryTracker country="India" data={data} />
                </TabPane>
                <TabPane tab="WorldWide" key="3">
                    <GlobalTracker data={data} />
                </TabPane>
            </Tabs>
        );
    }
}


export default CustomTabs;