import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();

  const form = document.getElementById('form');

  emailjs
    .sendForm('service_jgsbz24', 'template_txrqy8w', form, 'YkUs3wdebwerUJmbw')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  form.reset();
};

export default sendEmail;
