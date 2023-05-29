import styles from './btn.module.css';

const Btn = (props) => {
    return (
        <div className={`${props.space === "btnOutSpace" ? styles.btnContainerDimensions : ''} ${styles.btnContainer}`}>
            <button className={styles.generalBtn}>{props.btnTitle}</button>
        </div>
    )
}

export default Btn;