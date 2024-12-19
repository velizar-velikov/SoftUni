import './App.css';
import ToDoList from './components/to-do-list/ToDoList.jsx';

const todos = [
    { task: 'Do laundry', done: false, id: 1 },
    { task: 'Go gym', done: false, id: 2 },
    { task: 'Study', done: false, id: 3 },
];

function App() {
    return (
        <>
            <ToDoList todos={todos} />
        </>
    );
}

export default App;
