# Dadilja Melisa

Dadilja Melisa is a website created for a WebCircle client. WebCircle is a company where, together with colleagues, we work on creating webpages for small businesses to offer them the possibility to expand their reach in the digital world. Dadilja Melisa (Nanny Melisa, as a translation to English) is a landing contact page for a nanny. Our client's main goal was to have a web page to display her work and methodologies, price, and contact information so the customer (parents) could reach out as well as gain more credibility.

Disclosure: The client gave us prior authorization to display this source code as public and showcase our work.

### You can access Dadilja Melisa [here](https://dadiljamelisa.com/sr).

<img src="./public/screenshots/dadilja-melisa-screenshot.png" width=100% alt="Dadilja Melisa screenshot">

## Development Process

- Understanding the client's needs and the public;
- Coming up with key concepts and brand visuals;
- Developing the design in high fidelity using Figma;
- Getting the client's feedback and adjusting to the final design;
- Researching the best technologies for the development;
- Setting up project structure with NextJS;
- Creating modular components;
- Making the HTML structure;
- Styling the page elements from a mobile-first workflow;
- Download dependencies
    * @emailjs/browser: used to send emails using client-side only.
    * next-intl: a library from NextJS used for internacionalization, and translation of projects into multiple languages.
- Creating emailJS a template
- Creating a function to send email using emailJS;
- Testing email;
- Writing objects for translation for English (en) and Serbian (sr);
- Setting up the configuration for next-intl;
- Testing translation and project;
- Adjusting project structure for deployment;
- Deploying.

## Built with

- Semantic HTML5 markup;
- Next.JS;
- Mobile-first workflow;

## Technologies and Tools

- [HTML5](https://html.com)
- [CSS3](https://www.w3.org/Style/CSS/)
- [Next.JS](https://nextjs.org)

## Requirements

To work with the code, you will need, before you begin, to install on your machine: NodeJs, and Git and to have a source-code editor such as [VSCode](https://code.visualstudio.com).
You will also need to download all the dependencies used in this project by using this command in your terminal:

```
npm install
```

To run de project on your machine, use de following command:
```
npm run dev
```

## What We Learned

### The use of next-intl library:

- This was our first multilingual project, therefore our first time using the next-intl library. It was interesting to see how the translations are created on JSON files and the configuration behind using locales to access the translations.

~~~
export default async function Home() {
 const translate = useTranslations("Index");
 const language = usePathname();
 const formInput =
 language === "/en" ? scheduleFormInputEnglish : scheduleFormInputSerbian;
 const activitiesImg =
 language === "/en" ? activitiesImgEnglish : activitiesImgSerbian;

 return (
 <main className={styles.main}>
 <Navbar
 linkOne={translate("linkOne")}
 linkTwo={translate("linkTwo")}
 linkThree={translate("linkThree")}
 linkFour={translate("linkFour")}
 />
~~~

### Using emailJS:
- We were able to find emailJS to handle the emails sent by the user without a need for a server. The creation of an email template is intuitive as well as the logic to get the user input from the code. It was also helpful that this option allows a reasonable amount of emails to be sent for free, which is of great help for small businesses like the one of our client.
- 

~~~
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
~~~

## Useful resources
- [Next.js 13 App Directory & i18n - Full Tutorial](https://www.youtube.com/watch?v=pKolfZFW3gs): This YouTube tutorial together with the official documentation - [see documentation here](https://next-intl-docs.vercel.app/docs/getting-started/app-router-client-components) helped us understand how to set up the next-intl library.

### Made with :heart: by [Caroline Almeida Nikolic and WebCircle Team](https://www.linkedin.com/in/carolinealmeidanikolic/)