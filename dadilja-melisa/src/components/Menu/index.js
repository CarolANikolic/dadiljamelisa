import styles from './menu.module.css';
import PropTypes from 'prop-types';

const Menu = (props) => {
    return (
    <div className={styles.allMenu}>
        <div className={styles.menuContainer}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
        </div>
        <p>{props.menuTitle}</p>
    </div>
    )
};

export default Menu;

Menu.propTypes = {
    menuTitle: PropTypes.string
};