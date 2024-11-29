import { useState } from 'react';

export default function Hero() {
    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <div className="container">
            <div className="welcome-hero-txt">
                <h2>get your desired car in resonable price {count}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                </p>
                <button className="welcome-btn" onClick={() => (window.location.href = '#')}>
                    contact us
                </button>
            </div>
        </div>
    );
}
