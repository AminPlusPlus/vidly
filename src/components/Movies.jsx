import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteMovieById = (idMovie) => {
    deleteMovie(idMovie);
    this.setState({
      movies: getMovies(),
    });
  };

  render() {
    return (
      <div>
        {this.state.movies.length === 0 ? (
          <h3>No Movies</h3>
        ) : (
          this.movieTable()
        )}
      </div>
    );
  }

  movieTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{this.state.movies.map((movie) => this.tableBody(movie))}</tbody>
      </table>
    );
  }

  tableBody(movie) {
    return (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.deleteMovieById(movie._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movies;
