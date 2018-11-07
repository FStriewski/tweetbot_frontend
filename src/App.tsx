import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <SideBar />
        <MainStage />
        <BottomBar />
      </div>
    );
  }
}

export default App;
