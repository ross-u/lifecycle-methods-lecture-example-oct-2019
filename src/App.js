import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

class App extends React.Component {
  state = {
    currentTime: 'NOTHING',
    showClock: true
  }

  updateTime = () => {

    const currentTime = new Date().toUTCString();
    this.setState({ currentTime })
  }

  toggleClock = () => {
    this.setState({ showClock: !this.state.showClock })
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.updateTime} >Update Current Time</button>
        <button onClick={this.toggleClock}>TOGGLE CLOCK</button>

        {
          this.state.showClock
            ? <Clock year={2019}  currentTime={ this.state.currentTime }/>
            : null
        }
      </div>
    );
  }
}

export default App;
