import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// movies component는 state를 필요로 하지 않는다.
// --> function component 사용

// argument 넘겨줄때 { } 꼭 씌워주자!!!
// id는 link 등 쓸 때 사용
function Movie({ year, title, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

// 먼저 작성해주는게 좋다
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

// @@잊지말자@@
export default Movie;
