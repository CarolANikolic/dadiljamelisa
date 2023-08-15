import PropTypes from "prop-types";
import styles from "./textblock.module.css";

const TextBlock = (props) => {
	return (
		<div
			className={`${
				props.desktopOnly
					? styles.desktopOnly
					: props.smallOnly
					? styles.smallOnly
					: ""
			}`}
		>
			{props.headingType ? (
				<h1
					className={`${
						props.heading === "headingBig"
							? styles.headingPlayfullBig
							: props.heading === "headingSmaller"
							? styles.headingPlayfullSmaller
							: ""
					} ${styles.headingPlayfull}`}
				>
					{props.headingOneContent}
				</h1>
			) : (
				<h2
					className={`${
						props.bold
							? styles.headingRegularBold
							: props.uppercase === "uppercase"
							? styles.headingRegularUppercase
							: ""
					} ${props.align === "justify" ? styles.justifyedText : ""} ${
						styles.headingRegular
					} ${styles.tabletWidth}`}
				>
					{props.headingTwoContent}
				</h2>
			)}
			{props.paragraph ? (
				<p
					className={`${styles.paragraphStyle} ${
						props.isCentered ? styles.centeredText : styles.justifyedText
					}`}
				>
					{props.paragraphContent}
				</p>
			) : (
				""
			)}
		</div>
	);
};

export default TextBlock;

TextBlock.propTypes = {
	headingType: PropTypes.bool,
	headingOneContent: PropTypes.string,
	headingTwoContent: PropTypes.string,
	paragraphContent: PropTypes.string,
	heading: PropTypes.string,
	isCentered: PropTypes.bool,
	bold: PropTypes.bool,
	uppercase: PropTypes.string,
	align: PropTypes.string,
	paragraph: PropTypes.bool,
	desktopOnly: PropTypes.bool,
	smallOnly: PropTypes.bool,
};
