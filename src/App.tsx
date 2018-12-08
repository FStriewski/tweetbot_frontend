import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Stream from './connectors/Stream';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { App as StyledApp } from './styles/App';
import { Stage as StyledStage } from './styles/Stage';

class App extends React.Component {
  public render() {
    return <StyledApp>
      <Stream>
        {({ tweets, byKeyword }) => <React.Fragment>
          <Header />
          <StyledStage>
            <SideBar byKeyword={byKeyword} />
            <MainStage tweets={tweets} />
          </StyledStage>
          <BottomBar />
        </React.Fragment>}
      </Stream>
    </StyledApp>;
  }
}

export default App;
