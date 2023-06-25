import styles from "./form.module.css";
import Image from "next/image";
import Button from "@/components/Button";
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

				{children}
			</div>

			<Button space="btnOutSpace" btnTitle="Scheduele" type="submit" />

			<Image
				className={styles.drawings}
				src={`${
					props.tabletActive
						? "/svgs/elements/drawings-tablet.svg"
						: "/svgs/elements/drawings.svg"
				}`}
				width={300}
				height={100}
				alt="drawings"
			></Image>
		</form>
	);
};

export default Form;

Form.propTypes = {
	tabletActive: PropTypes.bool,
	onSubmit: PropTypes.func,
};
