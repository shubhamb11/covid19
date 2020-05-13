import React from 'react';
import './App.scss';
import CustomTabs from './Components/CustomTabs';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <CustomTabs />  
      </div>
    );
  }
}

export default App;
