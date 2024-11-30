import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner.jsx';
import ToDoTable from './ToDoTable.jsx';
import Form from './Form.jsx';
import { createTodo, getAll } from '../../api/service.js';

export default function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        async function fetchTasks() {
            const todos = await getAll();
            setTasks(Object.values(todos));
        }

        fetchTasks();
    }, []);

    useEffect(() => {
        async function addTask() {
            const todo = await createTodo(task);

            setTasks((oldTasks) => {
                let newTasks = oldTasks.slice();
                newTasks.push(todo);
                return newTasks;
            });
        }
        if (task !== '') {
            addTask();
        }
    }, [task]);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const entries = [...formData.entries()];
        const data = Object.fromEntries(entries);
        const { task } = data;
        setTask(task);
    }

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>
            <Form onSubmit={onSubmit} />

            <div className="table-wrapper">{tasks.length > 0 ? <ToDoTable tasks={tasks} /> : <LoadingSpinner />}</div>
        </section>
    );
}
