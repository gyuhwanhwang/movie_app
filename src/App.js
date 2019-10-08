import React from "react";

// props.fav 와 {} 내부에 fav를 쓰는 것은 같다
function Food({ fav }) {
    return <h1>I like {fav}</h1>;
}

function App() {
    // props는 argument로 간다
    return (
        <div>
            <h1>Hello</h1>
            <Food fav="kimchi" />
            <Food fav="ramen" />
            <Food fav="samgiopsal" />
            <Food fav="chukumi" />
        </div>
    );
}

export default App;
