import React from "react";

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
    componentDidMount() {
        // 6초 후에 timeout이 일어나서 함수 실행
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
    }
}

export default App;
