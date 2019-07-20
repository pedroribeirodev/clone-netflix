import React, { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import MovieSlider from "./components/Slide";
import Footer from "./components/Footer";

const token = "e5693481ef000bfdd855a0f21ad39631";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/"
});

class App extends Component {

  constructor (props){
    super (props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    api.get(`popular?api_key=${token}`)
      .then(resp => {
        this.setState({
          movies: resp.data.results
        })
      })
  }
  
  render() {

    return (
      <div className="App">
        <Header />
        <MovieSlider movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
