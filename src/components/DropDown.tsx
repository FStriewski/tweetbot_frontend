import * as React from 'react';
import {
  DropdownListContainer as StyledDropdownListContainer,
  List as StyledList,
  ListLabel as StyledListLabel,
  Item as StyledItem
} from '../styles/DropDown';

interface IState {
  visible: boolean;
}

interface IProps {
  currentSelection: string;
  items: string[];
  method: (event: any)=>void;
}

class DropDown extends React.Component<IProps, IState> {
  state: IState = {
    visible: false
  };

  showList = () => {
    this.setState({
      visible: true
    });
  };

  hideList = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <StyledListLabel
          onClick={this.state.visible ? this.hideList : this.showList}
        >
          {this.props.currentSelection}
        </StyledListLabel>
        {this.state.visible && (
          <StyledDropdownListContainer onClick={this.hideList}>
            <StyledList>
              {this.props.items.map(item => (
                <div key={item} onClick={() => this.props.method(item)}>
                  {item}
                </div>
              ))}
            </StyledList>
          </StyledDropdownListContainer>
        )}
      </React.Fragment>
    );
  }
}

export default DropDown;
