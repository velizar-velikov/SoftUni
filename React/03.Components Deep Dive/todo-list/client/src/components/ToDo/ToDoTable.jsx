import ToDoTableRow from './ToDoTableRow.jsx';

export default function ToDoTable({ tasks }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
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
