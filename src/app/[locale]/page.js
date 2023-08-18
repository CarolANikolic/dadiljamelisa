"use client";
import TextBlock from "../../components/TextBlock";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/Button";
import ImgText from "../../components/ImgText";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import reviewsEnglish from "../../assets/objects/reviewsEnglish";
import Form from "../../components/Form/Form";
import sendEmail from "../../assets/functions/sendEmail";
import Input from "../../components/Input";
import scheduleFormInputEnglish from "../../assets/objects/scheduleFormInputEnglish";
import scheduleFormInputSerbian from "../../assets/objects/schedueleFormInputSerbian";
import { useTranslations } from "next-intl";
import activitiesImgEnglish from "../../assets/objects/activitiesImgEnglish";
import activitiesImgSerbian from "../../assets/objects/activitiesImgSerbian";
import reviewsSerbian from "../../assets/objects/reviewsSerbian";
import { usePathname } from "next/navigation";

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

			<section id="home" className={styles.desktopIntro}>
				<div
					className={`${styles.imgContainer} ${styles.imgContainerDimensions}`}
				>
					<Image
						className={styles.kidsPhoto}
						src="/photos/kids.png"
						width={100}
						height={100}
						alt="happy kids"
						unoptimized
					/>
				</div>

				<div className={`${styles.containerGap} ${styles.introInfoDesktop}`}>
					<TextBlock
						headingType
						heading="headingBig"
						headingOneContent={translate("introTitle")}
					/>
					<TextBlock
						smallOnly
						paragraph
						paragraphContent={translate("introExplanation")}
					/>
					<TextBlock
						smallOnly
						headingType
						heading="headingSmaller"
						headingOneContent={translate("secondaryHeading")}
					/>
					<TextBlock
						desktopOnly
						paragraph
						isCentered
						paragraphContent={translate("extraIntroDesktop")}
					/>

					<Button
						space="btnOutSpace"
						link="addLink"
						linkId="#form"
						btnTitle={translate("buttonSchedule")}
					/>
				</div>
			</section>

			<section className={`${styles.containerGap} ${styles.sectionDesktop}`}>
				<TextBlock
					headingType
					heading="headingBig"
					headingOneContent={translate("extraHeadingDesktop")}
				/>

				<TextBlock
					paragraph
					paragraphContent={translate("introExplanationDesktop")}
				/>

				<TextBlock
					headingType
					heading="headingBig"
					headingOneContent={translate("secondaryHeading")}
				/>
			</section>

			<section
				className={`${styles.aboutSectiondesktop} ${styles.containerGap}
`}
				id="about"
			>
				<Image
					className={styles.imagePhoto}
					src="/photos/melisa.png"
					width={100}
					height={100}
					alt="melisas's profile"
					unoptimized
				/>

				<div className={styles.aboutText}>
					<TextBlock
						bold
						align="justify"
						headingTwoContent={translate("aboutTitle")}
					/>
					<TextBlock paragraph paragraphContent={translate("aboutParagraph")} />
				</div>
			</section>

			<section className={`${styles.containerGap} ${styles.smallOnly}`}>
				{activitiesImg.map((activity, index) => (
					<ImgText key={index} {...activity} />
				))}
			</section>

			<section className={styles.desktopOnly}>
				<Carousel slides={activitiesImg} />
			</section>

			<section className={styles.containerGap} id="prices">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={translate("pricesHeading")}
				/>
				<TextBlock
					uppercase="uppercase"
					headingTwoContent={translate("promotionInfoOne")}
				/>

				<div className={styles.containerPrices}>
					<Image
						className={styles.prices}
						src={`/svgs/elements/prices-${
							language === "/en" ? "en" : "sr"
						}/price-one-kid.svg`}
						width={248}
						height={225}
						alt="price for one kid"
					/>
					<Image
						className={styles.prices}
						src={`/svgs/elements/prices-${
							language === "/en" ? "en" : "sr"
						}/price-two-kids.svg`}
						width={248}
						height={225}
						alt="price for two kids"
					/>
					<Image
						className={styles.prices}
						src={`/svgs/elements/prices-${
							language === "/en" ? "en" : "sr"
						}/price-three-kids.svg`}
						width={248}
						height={225}
						alt="price for three kids"
					/>
				</div>

				<TextBlock
					bold
					headingTwoContent={translate("promotionInfoTwo")}
				/>
			</section>

			<section className={styles.containerGap}>
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={translate("testimonialsHeading")}
				/>
				<Image
					className={styles.birdLogo}
					src="/svgs/logo/logo-bird.svg"
					width={100}
					height={100}
					alt="logo without brand name"
				></Image>
			</section>

			<Carousel
				carouselText
				slides={language === "/en" ? reviewsEnglish : reviewsSerbian}
				textOne="testimonial"
				textTwo="writer"
			/>

			<div className={styles.containerGap} id="contact">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={translate("formHeading")}
				/>
			</div>

			<Form
				lang={language}
				onSubmit={(event) => {
					event.preventDefault();

					const message = {
						Name: formInput[0].value,
						Phone: formInput[1].value,
						Email: formInput[2].value,
						"Starting Date": formInput[3].value,
						"Ending Date": formInput[4].value,
						Message: formInput[5].value,
					};

					sendEmail(message);
				}}
			>
				{formInput.map((input, index) => {
					return (
						<Input
							key={index}
							name={input.inputName}
							type={input.type}
							icon={input.icon}
							placeholder={input.placeholder}
							validation={input.validation}
							validationMessage={input.validationMessage}
							handleChange={(value) => {
								input.value = value;
							}}
						/>
					);
				})}
			</Form>

			<section className={`${styles.containerGap} ${styles.lastSection}`}>
				<TextBlock
					headingType
					heading="headingPlayfullSmaller"
					headingOneContent={translate("callToActionHeading")}
				/>
				<TextBlock bold headingTwoContent={translate("callToActionInfoOne")} />
				<TextBlock bold headingTwoContent={translate("callToActionInfoTwo")} />
			</section>

			<Footer />
		</main>
	);
}
