import React from "react";
import PropTypes from "prop-types";

// 기초는 React.Componet 에서 extends로 가져온다.
// App은 React,componet에서 확장된 것임
// react는 자동적으로 모든 class component의 render method를 실행하고자 함
class App extends React.Component {
    // Conponet의 data를 바꾸고 싶어서 class Componet를 사용
    // state에 우리가 바꾸고 싶은 data를 넣자
    state = {
        count: 0
    };
    add = () => {
        console.log("add");
    };
    minus = () => {
        console.log("minus");
    };
    render() {
        // class componet이기 때문에 this 명시
        return (
            <div>
                <h1>The number is : {this.state.count}</h1>
                {/* react에서 button은 onClick을 기본적 prop로 가지고 있다 */}
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
