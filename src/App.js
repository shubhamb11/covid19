import React from 'react';
import './App.css';
import CustomTabs from './Components/CustomTabs';
import { Helmet } from 'react-helmet';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Helmet>
          {/* <meta charSet="utf-8" /> */}
          <title>Covid19 Tracker</title>
        </Helmet>
        <CustomTabs />  
      </div>
    );
  }
}

export default App;
