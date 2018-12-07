import * as React from 'react';

import BottomBar from './components/BottomBar';
import Header from './components/Header';
import Stream from './connectors/Stream';
import MainStage from './components/mainstage/MainStage';
import SideBar from './components/sidebar/SideBar';
import { App as StyledApp } from './styles/App';

class App extends React.Component {
  public render() {
    return <StyledApp>
      <Stream>
        {({ tweets, byKeyword }) => <React.Fragment>
          <Header />
          <SideBar byKeyword={byKeyword} />
          <MainStage tweets={tweets} />
          <BottomBar />
        </React.Fragment>}
      </Stream>
    </StyledApp>;
  }
}

export default App;
