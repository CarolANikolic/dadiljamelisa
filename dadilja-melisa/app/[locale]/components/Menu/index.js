import styles from "./menu.module.css";
import PropTypes from "prop-types";

const Menu = (props) => {
	const { menu, setMenu } = props.toggle;
	return (
		<div className={styles.allMenu} onClick={() => setMenu(!menu)}>
			<div className={`${styles.menuContainer} ${menu && styles.changeMenu}`}>
				<div className={styles.bar1}></div>
				<div className={styles.bar2}></div>
				<div className={styles.bar3}></div>
			</div>
			<p className={styles.menu}>{!menu && props.menuTitle}</p>
		</div>
	);
};

export default Menu;

Menu.propTypes = {
	menuTitle: PropTypes.string,
};
