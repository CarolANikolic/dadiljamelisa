import Image from "next/image";
import styles from "./imgText.module.css";
import TextBlock from "../TextBlock";
import { useState } from "react";
import { Prosto_One } from "next/font/google";

const ImageAndText = ({ source, alt, heading, paragraph, color, ...props }) => {
	const [showText, setShowText] = useState(false);

	return (
		<div
			className={`${styles.container} 
			${styles.tabletExplanationContainer} 
			${
				color === "green"
					? styles.green
					: color === "yellow"
					? styles.yellow
					: color === "beige"
					? styles.beige
					: color === "darkPink"
					? styles.darkPink
					: ""
			} 
			`}
		>
			<div className={styles.activityImgContainer}>
				<Image
					className={styles.activityImg}
					src={source}
					width={100}
					height={100}
					alt={alt}
				/>

				<div
					className={`
					${!showText ? styles.content : styles.hide}
					${styles.active}
					`}
					onClick={() => setShowText(true)}
				>
					<p className={styles.activitiyDropdown}>Learn more</p>
				</div>
			</div>

			<div
				className={`${!showText && styles.hide} ${
					color === "green"
						? styles.green
						: color === "yellow"
						? styles.yellow
						: color === "beige"
						? styles.beige
						: color === "darkPink"
						? styles.darkPink
						: ""
				} ${styles.explanationContainer}`}
			>
				<TextBlock bold headingTwoContent={heading} />
				<TextBlock paragraph paragraphContent={paragraph} isCentered />

				<Image
					className={`${styles.closeIcon}`}
					src="/svgs/icons/chevron-down.svg"
					width={40}
					height={40}
					alt="x close"
					onClick={() => setShowText(false)}
				/>
			</div>
		</div>
	);
};

export default ImageAndText;
