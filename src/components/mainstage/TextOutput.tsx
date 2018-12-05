import * as React from 'react';

// const TextOutput = (tweets) =>  <div>{JSON.stringify(tweets)}</div>
const TextOutput = (tweets) => {
  if (tweets) { return <div>{ JSON.stringify(tweets)  }</div> }

  return <div>empty</div>

}













// if (tweets) {
//   return tweets.map(tweet => (
//     // <p>tweet.createdAt</p>
//     <p>123</p>
//   ))
// }
// console.log(typeof tweets)
// <div>test</div>
// }
// )



// ;

export default TextOutput;
