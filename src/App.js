import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'

const App = (props) => {
  return (
    <Container className="quote-box" id="quote-box">
      <h2 id="text">{props.quote}</h2>
      <br></br>
      <Row>
        <Col xs={6} ><p id="author">{props.author}</p></Col>
        <Col xs="auto" ><button id="new-quote">New Quote</button></Col>
        <Col xs="auto" ><a rel="noreferrer" target='_blank' href={"twitter.com/intent/tweet?text="+props.quote} id="tweet-quote">Tweet Quote</a></Col>
      </Row>
    </Container>
  );
}

export default App;