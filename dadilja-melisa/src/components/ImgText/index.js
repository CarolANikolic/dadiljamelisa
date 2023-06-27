import Image from "next/image";
import styles from "./imgText.module.css";
import TextBlock from "../TextBlock";
import { useState } from "react";

const ImageAndText = ({ source, alt, heading, paragraph, color, ...props }) => {
	const [showText, setShowText] = useState(false);

	return (
		<div
			className={`${styles.container} ${
				props.tabletActive && styles.tabletExplanationContainer
			} `}
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
					className={`${styles.content} ${
						(!showText || props.tabletActive) && styles.active
					}`}
					onClick={() => setShowText(true)}
				>
					<p className={styles.activitiyDropdown}>Learn more</p>
				</div>
			</div>

			{(showText || props.tabletActive) && (
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
							props.tabletActive && styles.hideCloseIcon
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
