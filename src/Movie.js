import React from "react";
import PropTypes from "prop-types";

// movies component는 state를 필요로 하지 않는다.
// --> function component 사용

// argument 넘겨줄때 { } 꼭 씌워주자!!!
function Movie({ id, year, title, summary, poster }) {
    return <h4>{title} </h4>;
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
