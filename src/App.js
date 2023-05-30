import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css'
import getapi from "./features/quote-api/api.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.props.quote,
      author: this.props.author
    }
    this.newQuote = this.newQuote.bind(this);
  }

  async newQuote() {
    const quote = await getapi()
    this.setState({
      quote: await quote[0].quote,
      author: await quote[0].author
    })
  }

  render() {
    return <Container className="quote-box" id="quote-box">
      <h2 id="text">{this.state.quote}</h2>
      <br></br>
      <Row>
        <Col xs={8} ><p id="author">{this.state.author}</p></Col>
        <Col xs="auto" ><Button onClick={this.newQuote} variant="primary" id="new-quote">New Quote</Button></Col>
        <Col xs="auto" ><Button variant="primary" rel="noreferrer" target='_blank' href={"https://twitter.com/intent/tweet?text="+this.state.quote} id="tweet-quote">Tweet Quote</Button></Col>
      </Row>
    </Container>
  };
}

export default App;