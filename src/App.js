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
    // setState를 사용하면 state를 refresh하고 render함수를 다시 call한다
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    // count: this.state.cout + 1 하는 것보다 current를 이용한 함수 사용이 좋다.
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
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
