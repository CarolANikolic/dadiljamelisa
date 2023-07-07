import styles from "./form.module.css";
import Image from "next/image";
import Button from "../Button";
import PropTypes from "prop-types";

const Form = ({ children, ...props }) => {
	return (
		<form
			onSubmit={props.onSubmit}
			id="form"
			className={`${
				!props.tabletActive ? styles.contactForm : styles.tabletForm
			}`}
		>
			<div className={styles.tabletContainer}>
				<Image
					src="/svgs/elements/girl-drawing.svg"
					width={195}
					height={125}
					alt="girl drawing"
				></Image>

				<Image
					className={styles.sunDrawing}
					src="/svgs/elements/sun.svg"
					width={71}
					height={65}
					alt="girl drawing"
				></Image>

			<div className={styles.formContainer}>
				{/* First block with 3 inputs */}
				<div className={styles.formFirstBlock}>
					{children.slice(0, 3)} {/* Render the first 3 children */}
				</div>

				{/* Second block with 3 inputs */}
				<div className={styles.formSecondBlock}>
					{children.slice(3, 7)} {/* Render the remaining 3 children */}
				</div>
				</div>
			</div>

			<Button space="btnOutSpace" btnTitle="Scheduele" type="submit" />

			{props.desktopActive ? (
				<div className={styles.desktopDrawingsContainer}>
					<Image
					className={styles.drawings}
					src="/svgs/elements/drawings-desktop-one.svg"
					width={300}
					height={100}
					alt="drawings for desktop one"
					/>

					<Image
					className={styles.drawings}
					src="/svgs/elements/drawings-desktop-two.svg"
					width={300}
					height={100}
					alt="drawings for desktop two"
					/>
				</div>

				) : props.tabletActive ? (
				<Image
					className={styles.drawings}
					src="/svgs/elements/drawings-tablet.svg"
					width={300}
					height={100}
					alt="drawings"
				/>
				
				) : (
				<Image
					className={styles.drawings}
					src="/svgs/elements/drawings.svg"
					width={300}
					height={100}
					alt="drawings"
				/>
				)}

		</form>
	);
};

export default Form;

Form.propTypes = {
	tabletActive: PropTypes.bool,
	onSubmit: PropTypes.func,
};
