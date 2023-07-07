import { useState } from "react";
import CalendarInput from "../Calendar";
import styles from "./input.module.css";
import PropTypes from "prop-types";

const Input = (props) => {
	const [notMatch, setNotMatch] = useState(false);
	const [empty, setEmpty] = useState(false);
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
						onChange={(event) => {
							props.handleChange(event.target.value);
							setEmpty(event.target.value === "");
						}}
						rows="4"
						cols="30"
						required
					></textarea>
					{empty && (
						<span className={styles.error__message}>
							This field is required
						</span>
					)}
				</div>
			) : props.type === "date" ? (
				<>
					<CalendarInput
						labelName={props.name}
						name={props.name}
						isTablet={props.tabletActive}
						onChange={(value) => {
							props.handleChange(value);
							setEmpty(value === "");
						}}
					/>
					{empty && (
						<span className={styles.error__message}>
							This field is required
						</span>
					)}
				</>
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
						onChange={(event) => {
							props.handleChange(event.target.value);
							const regex = new RegExp(props.validation);
							setNotMatch(!regex.test(event.target.value));
							setEmpty(event.target.value === "");
						}}
						required
					></input>
					{notMatch && (
						<span className="error-message">
							{empty ? "This field is required" : props.validationMessage}
						</span>
					)}
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
