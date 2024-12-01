import styles from './AddButton.module.css';

export default function AddButton() {
    return (
        <div className={styles['add-btn-container']}>
            <button type="submit" className="btn">
                + Add new Todo
            </button>
        </div>
    );
}
