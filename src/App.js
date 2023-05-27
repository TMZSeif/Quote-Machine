import React from 'react';

const App = (props) => {
  return (
    <div id="quote-box">
      <h2 id="text">{props.quote}</h2>
      <p id="author">{props.author}</p>
      <button id="new-quote">New Quote</button>
      <a id="tweet-quote">Tweet Quote</a>
    </div>
  )
}

export default App