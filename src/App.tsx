import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Stream from './connectors/Stream';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import {App as StyledApp} from './styles/App';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <StyledApp>
        <Stream>
          {({ streaming }) => (
            <React.Fragment>
              <Header />
              <SideBar toggleStream={streaming} />
              <MainStage />
              <BottomBar />
            </React.Fragment>
          )}
        </Stream>
      </StyledApp>

    );
  }
}

export default App;
