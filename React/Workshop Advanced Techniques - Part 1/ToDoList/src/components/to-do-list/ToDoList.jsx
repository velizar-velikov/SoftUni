import { Component } from 'react';
import ToDoItem from './to-do-item/ToDoItem.jsx';
import MyContext from '../../context/MyContext.js';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos,
        };

        this.todoClickHandler = this.todoClickHandler.bind(this);
        this.todoRemoveHandler = this.todoRemoveHandler.bind(this);
    }

    todoClickHandler(todoId) {
        this.setState({
            todos: this.state.todos.map((todo) => (todo.id == todoId ? { ...todo, done: !todo.done } : todo)),
        });
    }

    todoRemoveHandler(todoId) {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== todoId),
        });
    }

    render() {
        return (
            <MyContext.Provider value="Pesho e gotino momche">
                <h1>To do list</h1>
                <ul>
                    {this.state.todos.map((todo) => (
                        <ToDoItem
                            key={todo.id}
                            {...todo}
                            clickHandler={this.todoClickHandler}
                            removeHandler={this.todoRemoveHandler}
                        />
                    ))}
                </ul>
            </MyContext.Provider>
        );
    }
}

export default ToDoList;
