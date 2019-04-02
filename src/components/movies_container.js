import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
    axios.get(url).then((resp) => {
      console.log(resp);
      this.setState({
        movies: resp.data.feed.entry
      })
    }).catch((err) => {
      console.log(err.message)
    });
  }


  render() {
    console.log(this.state);
    const movieList = this.state.movies.map((movieInfo, index) => {
      return <Movie info={movieInfo} key={index} />
    })
    return(
      <div>
        {movieList}
      </div>
    )
  }
}

export default MoviesContainer;
