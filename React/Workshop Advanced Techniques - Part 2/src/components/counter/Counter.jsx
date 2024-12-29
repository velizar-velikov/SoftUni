import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => setCount((count) => count + 1);
    const decrementHandler = () => setCount((count) => count - 1);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
}
