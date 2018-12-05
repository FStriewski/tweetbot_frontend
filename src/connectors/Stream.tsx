import * as React from 'react';
import * as request from 'superagent';

const baseUrl = 'http://localhost:4001'

interface IRenderProps {
  getTweets: (param) => void,
  tweets: string,
};

interface IProps { children: (props: IRenderProps) => React.ReactNode };


export default class Stream extends React.Component<IProps, {}> {
  readonly state = { output: '' };

  constructor(props) {
    super(props);
  }

  getTweets = async (param) => {
    const tweets = await request.get(`${baseUrl}/tweets`).query({ account: "elonmusk"})
    this.setState({output: tweets})
    console.log(this.state.output)
  };

  render() {
    return <React.Fragment>
      {this.props.children({
        getTweets: this.getTweets,
        tweets: this.state.output,
      })}
    </React.Fragment>;
  }
}
