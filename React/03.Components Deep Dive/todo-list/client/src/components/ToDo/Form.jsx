import styles from './Form.module.css';
import AddButton from '../AddButton/AddButton.jsx';

export default function Form({ onSubmit }) {
    return (
        <section className={styles['form-container']}>
            <form onSubmit={onSubmit}>
                <label htmlFor="task">Task Name</label>
                <input type="text" id="task" name="task" placeholder="task name" />
                <AddButton />
            </form>
        </section>
    );
}
