import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { someRandomArr: [] };
  }

  timer() {
    let someRandomArr = this.state.someRandomArr;
    for (let key in someRandomArr){
      someRandomArr[key].value = Math.floor(Math.random()*100)
    }
    this.setState({ someRandomArr: someRandomArr});

  }

  componentDidMount() {
    this.setState({
      someRandomArr : [
        {
          name: "randomOne",
          value: 10
        },
        {
          name: "randomTwo",
          value: 20
        },
        {
          name: "randomThree",
          value: 30
        },
        {
          name: "randomFour",
          value: 40
        },
        {
          name: "randomFive",
          value: 50
        }
      ]
    })

    this.intervalId = setInterval(this.timer.bind(this), 2000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div class="container">
        <div className="App">
          <h1>Random number refresh table</h1>
          <Table someRandomArr={this.state.someRandomArr}/>
        </div>
      </div>

    );
  }
}

export default App;
