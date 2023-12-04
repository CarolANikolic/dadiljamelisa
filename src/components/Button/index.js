import styles from "./btn.module.css";
import PropTypes from "prop-types";
import Link from "next-intl/link";

const Btn = (props) => {
	return (
		<div
			className={`${
				props.space === "btnOutSpace" && styles.btnContainerDimensions
			} ${styles.btnContainer}`}
		>
			{props.link === "addLink" ? (
				<Link href={props.linkId} className={styles.generalBtn}>
					{props.btnTitle}
				</Link>
			) : props.link === "anchorLink" ? (
				<a href={props.linkId} className={styles.generalBtn}>
					{props.btnTitle}
				</a>
			) : (
				<button className={styles.generalBtn} type={props.type}>
					{props.btnTitle}
				</button>
			)}
		</div>
	);
};

export default Btn;

Btn.propTypes = {
	space: PropTypes.string,
	btnTitle: PropTypes.string,
	link: PropTypes.string,
	linkId: PropTypes.string,
	type: PropTypes.string,
};
