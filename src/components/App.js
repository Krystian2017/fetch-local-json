import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false
  };

  componentDidMount() {
    // setTimeout(this.fetchData, 3000)
    fetch("data/words.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          words: data.words,
          isLoaded: true
        });
      });
  }

  // fetchData = () => {
  //   fetch('data/words.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         words: data.words,
  //         isLoaded: true
  //       })
  //     })
  // }

  render() {
    console.log("render");
    const words = this.state.words.map(word => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));
    return (
      <div className="App">
        <div>
          <h1 className="App-header">Polish-English dictionary</h1>
          <p className="App-description">
            This application is a Polish-English dictionary - I used create-app
            and Fetch to load a local file. It is simply app and you can find
            the code on{" "}
            <a
              className="App-link"
              href="https://github.com/Krystian2017/fetch-local-json"
            >
              my GitHub account.
            </a>
          </p>
        </div>
        <ul>{this.state.isLoaded ? words : "loading data..."}</ul>
      </div>
    );
  }
}

export default App;
