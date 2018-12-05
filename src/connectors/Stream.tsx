import * as React from 'react';
import * as request from 'superagent';

const baseUrl = 'http://localhost:4001'

interface IRenderProps {
  byKeyword: (param) => void,
  tweets: any,
};

interface IProps { children: (props: IRenderProps) => React.ReactNode };


export default class Stream extends React.Component<IProps, {}> {
  readonly state = { tweets: {} };

  constructor(props) {
    super(props);
  }

  parseResponse = response => response

  byKeyword = async (param) => {
    this.setState({
      ...this.state, 
      tweets: await request
        .get(`${baseUrl}/tweets`)
        .query({ keyword: param })
        .then(response => this.parseResponse(response.body))
    });

    //   const tweets = await request.get(`${baseUrl}/tweets`).query({ keyword: param }).then(response => this.parseResponse(response.body))
    //   this.setState({ tweets })
  };

  render() {
    return <React.Fragment>
      {this.props.children({
        byKeyword: this.byKeyword,
        tweets: this.state.tweets
      })}
    </React.Fragment>;
  }
}
