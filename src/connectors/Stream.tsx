import * as React from 'react';
import * as Twit from 'twit';
import * as request from 'superagent';

const baseUrl = 'http://localhost:4001'

const twit = new Twit({
  access_token: '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
  access_token_secret: 'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ',
  consumer_key: 'ViQVPujGb7SUGjGJvuTHsqQjm',
  consumer_secret: 'c0PUaTcxQseew5DPOGlqZKNZmwMk1NcEo1qWWxeh8NHTDA27nX'
});

interface IRenderProps {
  getTweets: () => void,
  tweets: string,
};

interface IProps { children: (props: IRenderProps) => React.ReactNode };


export default class Stream extends React.Component<IProps, {}> {
  readonly state = { output: '' };

  constructor(props) {
    super(props);
  }

  getTweets = async () => {
   const tweets = await request(`${baseUrl}/tweets`)
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
