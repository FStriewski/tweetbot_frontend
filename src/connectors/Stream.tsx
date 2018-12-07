import * as React from 'react';
import * as request from 'superagent';

const baseUrl = 'http://localhost:4001'

interface IRenderProps {
  byKeyword: (keyword, count) => void,
  tweets: any,
};

interface ITweet {
  created_at: string; // date time
  coordinates: string; // ?
  text: string; // tweet body
  retweetCount: number;
  id: number; // userid
  name: string; // user name
  screen_name: string; // profile name
  activeSince: string; // user created at
  location: string; // country
  followersCount: number;
}

interface IState { tweets: ITweet[] }

interface IProps { children: (props: IRenderProps) => React.ReactNode };

const initialState = {
  tweets: []
}

export default class Stream extends React.Component<IProps, IState> {
  readonly state = initialState;

  constructor(props) {
    super(props);
  }

  parseResponse = response => response.body

  byKeyword = async (keyword, count) => {

    const messages = await request
      .get(`${baseUrl}/tweets`)
      .query({ keyword, count })
      .then(response => this.parseResponse(response))

    this.setState({ ...this.state, tweets: [...messages] })

    // console.log("State: " + JSON.stringify(this.state))
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
