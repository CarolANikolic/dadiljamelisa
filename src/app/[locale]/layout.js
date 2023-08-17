import "./globals.css";
import { Montserrat } from "next/font/google";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { notFound } from "next/navigation";

const montserratRegular = Montserrat({ subsets: ["latin"], weight: ["400"] });

async function getMessages(locale) {
	try {
		return (await import(`../../../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
}

export async function generateStaticParams() {
	return ["en", "sr"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
	const messages = await getMessages(locale);

	const t = createTranslator({ locale, messages });

	return {
		title: "Dadilja Melisa",
		description: "Generated by create next app",
	};
}

export default async function LocaleLayout({ children, params: { locale } }) {
	const messages = await getMessages(locale);

	return (
		<html lang={locale}>
			<head>
				<meta name="google-site-verification" content="7E1diwM4G9xvsG9KfbFb3zw8f9yjjE5gmF4uxJikk6U" />
			</head>
			<body className={montserratRegular.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
