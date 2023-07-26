const scheduleFormInputSerbian = [
	{
		inputName: "Ime",
		type: "text",
		placeholder: "Ana Petrović",
		icon: "user",
		value: "",
		validationMessage:
			"Molimo, unesite ime sa više od 5 slova i bez brojeva!",
		validation: /^[a-zA-Z ]{6,}$/,
	},
	{
		inputName: "Telefon",
		type: "tel",
		placeholder: "064-0888-888",
		icon: "phone",
		value: "",
		validationMessage:
			"Neispravan format telefona. Molimo koristite format ###-####-###",
		validation: /^(\d{3})-?(\d{4})-?(\d{3})$/,
	},
	{
		inputName: "E-pošta",
		type: "email",
		placeholder: "email@email.com",
		icon: "mail",
		value: "",
		validationMessage: "Neispravan format e-pošte.",
		validation: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
	},
	{
		inputName: "Početni datum",
		type: "date",
		placeholder: "Izaberite početni datum",
		value: "",
	},
	{
		inputName: "Završni datum",
		type: "date",
		placeholder: "Izaberite završni datum",
		value: "",
	},
	{
		inputName: "Poruka",
		type: "textarea",
		placeholder: "Zdravo Melisa, želim zakazati vikend čuvanje za dete!",
		value: "",
	},
];

export default scheduleFormInputSerbian;
