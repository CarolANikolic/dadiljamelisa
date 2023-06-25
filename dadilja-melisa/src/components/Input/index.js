import CalendarInput from "../Calendar";
import styles from "./input.module.css";
import PropTypes from "prop-types";

const Input = (props) => {
	return (
		<div className={styles.inputContainer}>
			{props.type === "textarea" ? (
				<div className={styles.inputBlock}>
					<label htmlFor={props.name}>{props.name}</label>
					<textarea
						className={styles.inputField}
						name={props.name}
						id={props.name}
						placeholder={props.placeholder}
						onChange={(event) => props.handleChange(event.target.value)}
						rows="4"
						cols="30"
					></textarea>
				</div>
			) : props.type === "date" ? (
				<CalendarInput
					labelName={props.name}
					name={props.name}
					isTablet={props.tabletActive}
					onChange={(value) => props.handleChange(value)}
				/>
			) : (
				<div className={styles.inputBlock}>
					<label htmlFor={props.name}>{props.name}</label>
					<input
						className={`${
							props.icon === "user"
								? styles.userIcon
								: props.icon === "phone"
								? styles.phoneIcon
								: props.icon === "mail"
								? styles.mailIcon
								: ""
						} ${styles.inputField}`}
						type={props.type}
						name={props.name}
						id={props.name}
						placeholder={props.placeholder}
						onChange={(event) => props.handleChange(event.target.value)}
						required
					></input>
				</div>
			)}
		</div>
	);
};

export default Input;

Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	icon: PropTypes.string,
	tabletActive: PropTypes.bool,
};
