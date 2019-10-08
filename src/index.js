import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// component는 html을 반환하는 함수이다 !
// react application은 한번에 하나의 component만 rendering 할 수 있다
ReactDOM.render(<App />, document.getElementById("root"));
