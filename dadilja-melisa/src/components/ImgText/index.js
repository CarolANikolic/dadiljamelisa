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
			${props.tabletActive && 
			styles.tabletExplanationContainer} 
			${props.desktopActive && !props.tabletActive ? (
						color === "green"
							? styles.green
							: color === "yellow"
							? styles.yellow
							: color === "beige"
							? styles.beige
							: color === "darkPink"
							? styles.darkPink
							: ""
			) : ""} 
			${styles.desktopExplanationContainer}`}
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
					${styles.content} 
					${styles.active}
					`}
					onClick={() => setShowText(true)}
				>
					<p className={styles.activitiyDropdown}>Learn more</p>
				</div>
			</div>

			{(showText || props.tabletActive || props.desktopActive) && (
				<div
					className={`${
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

						<TextBlock bold="bold" headingTwoContent={heading} />
						<TextBlock
							paragraph
							paragraphContent={paragraph}
							isCentered={props.tabletActive}
						/>

					<Image
						className={`${styles.closeIcon} ${
							(props.tabletActive || props.desktopActive) && styles.hideCloseIcon
						}`}
						src="/svgs/icons/chevron-down.svg"
						width={40}
						height={40}
						alt="x close"
						onClick={() => setShowText(false)}
					/>
				</div>
			)}
		</div>
	);
};

export default ImageAndText;
