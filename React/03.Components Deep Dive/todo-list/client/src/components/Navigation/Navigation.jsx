import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <header className={styles['navigation-header']}>
            <span className={styles['navigation-logo']}>
                <img src="./public/images/todo-icon.png" alt="todo-logo" />
            </span>
            <span className="spacer"></span>
            <span className={styles['navigation-description']}>Todo List</span>
        </header>
    );
}
