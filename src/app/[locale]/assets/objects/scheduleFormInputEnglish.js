const scheduleFormInputEnglish = [
	{
		inputName: "Name",
		type: "text",
		placeholder: "Ana Petrović",
		icon: "user",
		value: "",
		validationMessage:
			"Please, enter a name with more than 5 letters and no numbers!",
		validation: /^[a-zA-Z ]{6,}$/,
	},
	{
		inputName: "Phone",
		type: "tel",
		placeholder: "064-0888-888",
		icon: "phone",
		value: "",
		validationMessage:
			"Invalid phone number format. Please use the format ###-####-###",
		validation: /^(\d{3})-?(\d{4})-?(\d{3})$/,
	},
	{
		inputName: "Email",
		type: "email",
		placeholder: "email@email.com",
		icon: "mail",
		value: "",
		validationMessage: "Invalid email format.",
		validation: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
	},
	{
		inputName: "Starting date",
		type: "date",
		placeholder: "Select starting date",
		value: "",
	},
	{
		inputName: "Ending date",
		type: "date",
		placeholder: "Select ending date",
		value: "",
	},
	{
		inputName: "Message",
		type: "textarea",
		placeholder: "Hi Melisa, I want to schedule a weekend care for my kid!",
		value: "",
	},
];

export default scheduleFormInputEnglish;
