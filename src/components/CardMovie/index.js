import React from "react";
import "./index.css";

const CardMovie = (props) => {
    const { image, title, desc } = props;
    return (
        <div className="card">
            <img src={ image } alt="imagem filme" />
            <h2>{ title }</h2>
            <p>{ desc }</p>
        </div>
    );
};

export default CardMovie;