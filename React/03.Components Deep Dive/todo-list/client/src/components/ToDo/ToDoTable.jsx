import styles from './ToDoTable.module.css';
import ToDoTableRow from './ToDoTableRow.jsx';

export default function ToDoTable({ tasks }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles['table-header-task']}>Task</th>
                    <th className={styles['table-header-status']}>Status</th>
                    <th className={styles['table-header-action']}>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <ToDoTableRow key={task._id} task={task} />
                ))}
            </tbody>
        </table>
    );
}
