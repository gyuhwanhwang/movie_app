import React from "react";
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image:
            "https://woochonfood.com/wp-content/uploads/2019/05/%EB%B0%B0%EC%B6%94%EA%B9%80%EC%B9%98-Napa-Cabbage-Kimchi.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
            "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
        rating: 4.9
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "http://recipe1.ezmember.co.kr/cache/recipe/2018/01/18/91237b8fa18b78700d6586e1c6c9f73b1.jpg",
        rating: 4.8
    },
    {
        id: 4,
        name: "Doncasu",
        image:
            "http://recipe1.ezmember.co.kr/cache/recipe/2019/01/12/b9343d314206275c1b6d0d0c4fcc2ce71.jpg",
        rating: 5.5
    }
];

// props.name 와 {} 내부에 fav를 쓰는 것은 같다
function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

function App() {
    // props는 argument로 간다
    return (
        <div>
            {/* dish는 object다! */}
            {/*  map함수는 배열의 각 item을 한번씩 돌면서 실행되고 return 모아서 다시 배열을 return */}
            {foodILike.map(dish => (
                // key는 componet에 전달되지 않고 react내부에서 사용
                <Food
                    key={dish.id}
                    name={dish.name}
                    picture={dish.image}
                    rating={dish.rating}
                />
            ))}
        </div>
    );
}

export default App;
