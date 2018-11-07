import * as React from 'react';
import './App.css';
import * as Twit from 'twit'


class App extends React.Component {
  public render() {

    const twit = new Twit({
      consumer_key: 'ViQVPujGb7SUGjGJvuTHsqQjm',
      consumer_secret: 'c0PUaTcxQseew5DPOGlqZKNZmwMk1NcEo1qWWxeh8NHTDA27nX',
      access_token: '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
      access_token_secret: 'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ'
    })

    const sleep = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 10000)
      })
    }

    const fn = async () => {
      while (true) {
        console.log('--ping Twitter:')
        const tweets = await twit.get('search/tweets', { q: '@realDonaldTrump' })
        console.log(tweets.data)
        await sleep()
      }
    }

    return (
      <div className="App">
        Test
      </div>
    );
  }
}

export default App;
