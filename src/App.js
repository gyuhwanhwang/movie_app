import React from "react";
import axios from "axios"; // for fetch
import Movie from "./Movie";

// 기초는 React.Componet 에서 extends로 가져온다.
// App은 React,componet에서 확장된 것임
// react는 자동적으로 모든 class component의 render method를 실행하고자 함
class App extends React.Component {
    // Conponet의 data를 바꾸고 싶어서 class Componet를 사용
    // state에 우리가 바꾸고 싶은 data를 넣자
    state = {
        isLoading: true,
        movies: []
    };
    // axios.get()이 시간이 좀 걸릴 수 있으므로 기다려줘야 하고
    // 그걸 알리기 위해서 비동기 처리 async, await
    // axios가 끝날 때까지 기다렸다가 계속해라
    getMovies = async () => {
        // object.data.data.movies <-- 얻고자 하는거
        const {
            data: {
                data: { movies }
            }
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating?sort_by=rating"
        );
        // movies(state) : movies(axios)
        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return (
            <div>
                {isLoading
                    ? "Loading..."
                    : movies.map(movie => (
                          <Movie
                              key={movie.id}
                              id={movie.id}
                              year={movie.year}
                              title={movie.title}
                              summary={movie.summary}
                              poster={movie.medium_cover_image}
                          />
                      ))}
            </div>
        );
    }
}

export default App;
