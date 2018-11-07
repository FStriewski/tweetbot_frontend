import * as React from 'react';
import * as Twit from 'twit';

const twit = new Twit({
  access_token: '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
  access_token_secret: 'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ',
  consumer_key: 'ViQVPujGb7SUGjGJvuTHsqQjm',
  consumer_secret: 'c0PUaTcxQseew5DPOGlqZKNZmwMk1NcEo1qWWxeh8NHTDA27nX'
});

const sleep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
};

const startStream = async () => {
  while (true) {
    console.log('--ping Twitter:');
    const tweets = await twit.get('search/tweets', { q: '@realDonaldTrump' });
    console.log(tweets.data);
    await sleep();
  }
};

export default startStream;
