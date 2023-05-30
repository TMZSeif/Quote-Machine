import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import getapi from './features/quote-api/api.js'

const container = document.getElementById('root');
const root = createRoot(container);

const quote = await getapi()

console.log(quote)

root.render(
  <React.StrictMode>
      <App quote={quote[0].quote} author={quote[0].author} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
