import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = (props) => {
  return (
    <Container id="quote-box">
      <h2 id="text">{props.quote}</h2>
      <br></br>
      <Row>
        <Col xs={9} ><p id="author">{props.author}</p></Col>
        <Col><button id="new-quote">New Quote</button></Col>
        <Col><a rel="noreferrer" target='_blank' href={"twitter.com/intent/tweet?text="+props.quote} id="tweet-quote">Tweet Quote</a></Col>
      </Row>
    </Container>
  );
}

export default App;