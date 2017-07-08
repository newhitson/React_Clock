import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {time: this.currentTime()};
      this.tick = this.tick.bind(this);
      this.currentTime = this.currentTime.bind(this);
    }

    currentTime(){
      let time = new Date();
      let hours = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();

      return `${hours}:${minutes}:${seconds}`;
    }

    componentDidMount(){
      this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.intervalId);
    }

    tick() {
      this.setState( { time:this.currentTime()} );
    }

    render () {
      return (
        <div>
          <h1>Clock</h1>
          <div className="clocks">
            <h2>{this.state.time}</h2>
          </div>
        </div>
      );
    }
}


export default Clock;
