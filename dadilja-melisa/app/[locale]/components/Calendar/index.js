import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css";
import PropTypes from "prop-types";

const CalendarInput = (props) => {
	// use useState hook to create a state variable and a function to update the value. The initial value is set to null since, initially there is no input/date selected.
	const [selectedDate, setSelectedDate] = useState(null);

	// Use Date JS object constructor to get the time and date from user's device. toLocaleDateString method gets the user's location and change the string display format accordingly, e.g. USA ("MM/DD/YYYY" (e.g., "06/15/2023")
	const currentDate = new Date().toLocaleDateString();

	return (
		<div className={styles.calendarContainer}>
			{/* Use htmlFor since for is a reserved JS keyword, in React and Next we use the "htmlFor" instead of "for" */}
			<label htmlFor={props.name}>{props.labelName}</label>

			<DatePicker
				id={props.name} // to link with htmlFor label
				selected={selectedDate} //atribute the selected date value/chosen date (initially null) to the props selected
				minDate={new Date()} // only shows the dates from current date and future, not the past.
				onChange={(date) => {
					setSelectedDate(date);
					props.onChange(date);
				}} //is set to a function that will be executed when the user changes or selects a date. The function receives an argument (in this case, named date). Whenever the user selects a new date, the onChange function updates the selectedDate by calling setSelectedDate function, passing the date argument as the new value to update the selectedDate variable.
				placeholderText={currentDate}
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={60}
				dateFormat="MM/dd/yyyy - HH:mm"
				required
				className={`${styles.inputField} ${
					props.isTablet && styles.tabletCalendar
				}`} // Apply a custom CSS class for styling
				calendarClassName={styles.datepickerCalendar} // Apply a custom CSS class for the calendar container
			/>
		</div>
	);
};

export default CalendarInput;

CalendarInput.propTypes = {
	labelName: PropTypes.string,
	name: PropTypes.string,
};
