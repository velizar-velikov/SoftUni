import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
    return (
        <div className={styles['loading-container']}>
            <div className={styles['loading-spinner']}>
                <span className={styles['loading-spinner-text']}>Loading</span>
            </div>
        </div>
    );
}
