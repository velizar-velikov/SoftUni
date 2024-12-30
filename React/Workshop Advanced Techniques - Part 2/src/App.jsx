import './App.css';
import Counter from './components/counter/Counter.jsx';
import MakeError from './components/MakeError.jsx';

function App() {
    return (
        <>
            <h1>React Unit Testing with Vitest</h1>
            <Counter />
            <MakeError />
        </>
    );
}

export default App;
