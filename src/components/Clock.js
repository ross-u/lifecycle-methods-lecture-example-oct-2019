import React, { Component } from 'react';

const spinnerUrl = 'https://www.eaglevillemotors.com/1/images/loading-gear.gif';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: this.props.year,
      isLoading: true,
      timer: 0,
      timerID: null
    };

    console.log('IN CONSTRUCTOR');

    // this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    console.log('IN COMPONENT DID MOUNT');

    // Get the data to display to the page
    setTimeout(()=> {
      this.setState({ isLoading: false})
    }, 2000)

    const timerID = setInterval(() => this.updateTimer(), 1000);
    this.setState({ timerID })
  }

  componentDidUpdate () {
    console.log(' -->IN COMPONENT DID UPDATE');
  }

  componentWillUnmount () {
    clearInterval(this.state.timerID)
    console.log('        X X COMPONENT WILL UNMOUNT ');
  }

  updateTimer = () => {
    this.setState( { timer: this.state.timer + 1});
  }

  render() {
    console.log('IN RENDER');
    const { isLoading } = this.state;

    return (
      <div>
        { isLoading 
            ? <img src={spinnerUrl} alt="" />
            : (<div>
                <h1>Clock</h1>

                <h2>Year</h2>
                <p>{this.state.year}</p>

                <h2>Current Time</h2>
                <p>{this.props.currentTime}</p>

                <h2>Timer</h2>
                <p>{this.state.timer}</p>
              </div>
              )
        }
      </div>
    );
  }
  // ⮕ After`render` is done  the React component “mounts” to the DOM.
}

export default Clock;
