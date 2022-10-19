import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0)
    const number = 10;

    const increaseNumber = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return (
        <div>
            <button onClick={increaseNumber}>Click me</button>
            <h3>Count: {count}</h3>
            <h4>My number: {number}</h4>
            <p>count: {count}</p>
            <p>Count: {count * 2}</p>
        </div>
    );
};

export default Home;