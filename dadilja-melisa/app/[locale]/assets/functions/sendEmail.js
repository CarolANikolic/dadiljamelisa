import emailjs from "@emailjs/browser";
import validateInput from "./validateInput";

const sendEmail = (message) => {

	if (validateInput(message).length === 0) {

		emailjs
		.send("service_jgsbz24", "template_txrqy8w", message, "YkUs3wdebwerUJmbw")
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

	form.reset();

	}	
};

export default sendEmail;
