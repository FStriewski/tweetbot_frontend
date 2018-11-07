import * as React from 'react';
import * as Twit from 'twit';

const twit = new Twit({
  access_token: '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
  access_token_secret: 'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ',
  consumer_key: 'ViQVPujGb7SUGjGJvuTHsqQjm',
  consumer_secret: 'c0PUaTcxQseew5DPOGlqZKNZmwMk1NcEo1qWWxeh8NHTDA27nX'
});

interface IRenderProps { streaming: () => void };

interface IProps { children: (props: IRenderProps) => React.ReactNode };


export default class Stream extends React.Component<IProps, {}> {
  readonly state = { streaming: false };

  constructor(props) {
    super(props);
  }

  sleep = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 10000);
    });
  };

  stream = async () => {
    while (this.state.streaming) {
      console.log('--ping Twitter:');
      const tweets = await twit.get('search/tweets', { q: '@elonmusk' });
      console.log(tweets.data);
      await this.sleep();
    }
  };

  startStreaming = () => {
     this.setState({ streaming: !this.state.streaming });
    console.log(this.state.streaming)
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children({ streaming: this.startStreaming })}
      </React.Fragment>
    );
  }
}
