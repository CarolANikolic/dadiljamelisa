import scheduleFormInput from "../objects/scheduleFormInput";

const validateInput = (message) => {
    const inputValues = Object.values(message);
    const errors = [];
    const errorSpans = document.getElementsByClassName("error-message");
  
    inputValues.map((value, index) => {
      const input = scheduleFormInput[index];
      const regex = new RegExp(input.validation);
      const isValid = String(value).match(regex);
  
      if (!isValid) {
        errors.push(input.validationMessage);
		for (let i = 0; i < errorSpans.length; i++) {
		  errorSpans[i].innerHTML = errors[i] || "";
      }
    } 
    });
  
    return errors;
  };

export default validateInput;