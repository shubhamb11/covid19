import React from 'react';
import './App.scss';
import CustomTabs from './Components/CustomTabs';
import { BackTop } from 'antd';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <BackTop />
        <CustomTabs />  
      </div>
    );
  }
}

export default App;
