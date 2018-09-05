import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import posed from 'react-pose';

const Logo = posed.div({
  sembunyi: { opacity:0,
  transition: { type: 'spring', stiffness: 100 }},
  muncul: { opacity:1, 
    transition: { type: 'spring', stiffness: 100 }}
})

const Paragraph = posed.div({
  start: { y: '0',
  transition: {
    type: 'spring',
    round: true
  }
  },
  end: {
    y: '10px',
    transition: {
      type: 'spring',
      round: true
    }
  }
})

class App extends Component {
  state = { isKeliatan: true}

  componentDidMount() {
    setInterval(() => {
      this.setState({ isKeliatan: !this.state.isKeliatan });
    }, 1000);
  }

  render() {
    const { isKeliatan } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Logo pose={isKeliatan ? 'sembunyi' : 'muncul'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Logo>
          <h1 className="App-title">Hi, React Pose!</h1>
        </header>
        <Paragraph pose={isKeliatan ? 'start' : 'end'}>
        <p className="App-intro">
          Get to know me : <a href="https://www.ervandra.com" target="_blank" rel="noopener noreferrer">www.ervandra.com</a>
        </p>
        </Paragraph>
      </div>
    );
  }
}

export default App;
