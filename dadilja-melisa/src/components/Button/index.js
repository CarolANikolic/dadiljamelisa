import styles from './btn.module.css';

const Btn = (props) => {
    return (
        <div className={styles.btnContainer}>
            <button className={styles.generalBtn}>{props.btnTitle}</button>
        </div>
    )
}

export default Btn;