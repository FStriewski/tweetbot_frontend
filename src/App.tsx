import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Stream from './connectors/Stream';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import './App.css';

class App extends React.Component {
  public render() {
    return <Stream>
      {({ toggleStreaming }) => <React.Fragment>
        <Header />
        <SideBar toggleStreaming={toggleStreaming} />
        <MainStage />
        <BottomBar />
      </React.Fragment>}
    </Stream>;
  }
}

export default App;
