import React from "react";
import "./index.css";
import CardMovie from "../../components/CardMovie";

const MovieSlider = props => {
  const { movies, title } = props;
  return (
    <div>
      <h2>{title}</h2>
      <div className="lista-card">
        {movies.map(movie => (
          <CardMovie
            key={movie}
            image={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            title={movie.title}
            desc={movie.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSlider;
