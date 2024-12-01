import { useEffect, useState } from 'react';
import { updateTodo } from '../../api/service.js';
import styles from './ToDoTableRow.module.css';

export default function ToDoTableRow({ task }) {
    const [status, setStatus] = useState(task.isCompleted);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        async function changeStatus() {
            const todo = await updateTodo(task._id, status);
        }
        if (!isFirstRender) {
            changeStatus();
        }
    }, [status]);

    function onButtonClick() {
        if (isFirstRender) {
            setIsFirstRender(false);
        }
        setStatus(status ? false : true);
    }
    return (
        <tr className={`${styles.todo}${status ? ` ${styles['is-completed']}` : ''}`}>
            <td>{task.text}</td>
            <td>{status ? 'Complete' : 'Incomplete'}</td>
            <td className={styles['todo-action']}>
                <button onClick={onButtonClick} className={styles.btn + ' ' + styles['todo-btn']}>
                    Change status
                </button>
            </td>
        </tr>
    );
}
