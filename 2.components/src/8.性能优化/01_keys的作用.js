import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ["黑客帝国1", "黑客帝国2", "黑客帝国3"],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
        <button onClick={() => this.addMovie()}>添加电影</button>
      </div>
    );
  }

  addMovie() {
    this.setState({
      movies: ['黑客帝国', ...this.state.movies]
    })
  }
}
