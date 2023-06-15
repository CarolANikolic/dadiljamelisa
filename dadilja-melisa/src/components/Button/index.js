import styles from './btn.module.css';
import propTypes from 'prop-types';

const Btn = (props) => {
    return (
        <div className={`${props.space === "btnOutSpace" ? styles.btnContainerDimensions : ''} ${styles.btnContainer}`}>
            <button className={styles.generalBtn}>{props.btnTitle}</button>
        </div>
    )
}

export default Btn;

Btn.propTypes = {
    space: propTypes.string,
    btnTitle: propTypes.string
};