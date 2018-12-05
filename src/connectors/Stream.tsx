import * as React from 'react';
import * as request from 'superagent';

const baseUrl = 'http://localhost:4001'

interface IRenderProps {
  byKeyword: (param) => void,
  tweets: string,
};

interface IProps { children: (props: IRenderProps) => React.ReactNode };


export default class Stream extends React.Component<IProps, {}> {
  readonly state = { output: '' };

  constructor(props) {
    super(props);
  }

  byKeyword = async (param) => {
    const tweets = await request.get(`${baseUrl}/tweets`).query({ keyword: param })
    this.setState({ output: tweets })
  };

  render() {
    return <React.Fragment>
      {this.props.children({
        byKeyword: this.byKeyword,
        tweets: this.state.output
      })}
    </React.Fragment>;
  }
}
