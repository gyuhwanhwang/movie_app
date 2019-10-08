import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// movies component는 state를 필요로 하지 않는다.
// --> function component 사용

// argument 넘겨줄때 { } 꼭 씌워주자!!!
// id는 link 등 쓸 때 사용
function Movie({ year, title, summary, poster, genres }) {
    return (
        // class -> className
        // for -> htmlFor
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        // map은 항상 key가 필요. argument로 item number도 준다
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                {/* string의 앞부부만 보여주기 위해서 slice(시작, 끝) */}
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
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
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

// @@잊지말자@@
export default Movie;
