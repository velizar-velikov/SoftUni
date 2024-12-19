import { Component } from 'react';
import MyContext from '../../../context/MyContext.js';
import withMyContext from '../../../hoc/withMyContext.jsx';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        console.log('Building component');
    }

    componentDidMount() {
        console.log('Component did mount');
    }

    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount right after this');
    }

    render() {
        const { id, task, done, clickHandler, removeHandler, contextData } = this.props;

        return (
            <>
                <li style={done ? { textDecoration: 'line-through' } : {}}>
                    <span onClick={() => clickHandler(id)}>{task}</span>
                    <button onClick={() => removeHandler(id)}>X</button>
                </li>
                <p>{contextData}</p>
            </>
        );
    }
}

export default withMyContext(ToDoItem);
