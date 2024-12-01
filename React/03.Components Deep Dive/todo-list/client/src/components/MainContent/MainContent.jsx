import styles from './MainContent.module.css';
import ToDo from '../ToDo/ToDo.jsx';

export default function MainContent() {
    return (
        <main className={styles.main}>
            <ToDo />
        </main>
    );
}
