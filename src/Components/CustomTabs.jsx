import React from "react";
import axios from "axios";
import { Tabs } from "antd";

import CityTracker from "./CityTracker";
import CountryTracker from "./CountryTracker";
import GlobalTracker from "./GlobalTracker";



const { TabPane } = Tabs;

const fetchingData = async (key) => {
    let url = "";
    let fetchedData ={
        "active": 0,
        "confirmed": 0,
        "deaths": 0,
        "deltaconfirmed": 0,
        "deltadeaths": 0,
        "deltarecovered": 0,
        "lastupdatedtime": "",
        "recovered": 0,
        "state": "",
        "statecode": "",
        "statenotes": ""
    };
    switch (parseInt(key)) {
        case 1:
            url = "https://api.covid19india.org/data.json";
            try {
                let { data } = await axios.get(url);
                data.statewise.map(stateInfo=>{
                    if (stateInfo.statecode.toLowerCase() === "dl") {
                        fetchedData = stateInfo;
                    }
                });
            } catch (error) {
                console.log("error in getting data for City"); 
            }
            break;
        case 2:
            url = "https://api.covid19india.org/data.json";
            try {
                let { data } = await axios.get(url);
                fetchedData = data.statewise[0];
            } catch (error) {
                console.log("error in getting data for Country"); 
            }
            break;
        case 3:
            url = "https://covid19.mathdro.id/api";
            try {
                let { data }  = await axios.get(url);
                Object.keys(fetchedData).map(key =>{
                    if(data[key] !== undefined)
                    {
                        fetchedData[key] = data[key].value
                    }
                    
                })
                fetchedData["active"] = fetchedData.confirmed - fetchedData.recovered - fetchedData.deaths;
                fetchedData["lastupdatedtime"] = data["lastUpdate"];
                fetchedData["state"] = "WorldWide";
            } catch (error) {
                console.log("error in getting data for Global");    
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
        this.fetchRenderedData(1);
    }

    render(){
        let data = this.state.data;
        
        // if(!data){
        //     return ("Loading..");
        // }

        return(
            <Tabs style={{marginTop: 20}}tabBarGutter={50} defaultActiveKey="1" onChange={(key)=>this.fetchRenderedData(key)} size="large" destroyInactiveTabPane="false" animated={false}>
                <TabPane tab="Delhi" key="1">
                    <CityTracker area="Delhi" data={data} />
                </TabPane>
                <TabPane tab="India" key="2">
                    <CountryTracker area="India" data={data} />
                </TabPane>
                <TabPane tab="WorldWide" key="3">
                    <GlobalTracker area="WorldWide" data={data} />
                </TabPane>
            </Tabs>
        );
    }
}


export default CustomTabs;