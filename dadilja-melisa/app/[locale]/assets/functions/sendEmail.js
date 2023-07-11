import emailjs from "@emailjs/browser";

const sendEmail = (message) => {
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
};

export default sendEmail;
