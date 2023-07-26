"use client";
import TextBlock from "./components/TextBlock";
import Navbar from "./components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "./components/Button";
import ImgText from "./components/ImgText";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import reviewsEnglish from "./assets/objects/reviewsEnglish";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import sendEmail from "./assets/functions/sendEmail";
import useCheckScreenSize from "./hooks/useCheckScreenSize";
import Input from "./components/Input";
import scheduleFormInputEnglish from "./assets/objects/scheduleFormInputEnglish";
import scheduleFormInputSerbian from "./assets/objects/schedueleFormInputSerbian";
import { useTranslations } from "next-intl";
import activitiesImgEnglish from "./assets/objects/activitiesImgEnglish";
import activitiesImgSerbian from "./assets/objects/activitiesImgSerbian";
import reviewsSerbian from "./assets/objects/reviewsSerbian";

export default function Home() {
	const t = useTranslations("Index");
	const [tabletActive, setTabletActive] = useState(false);
	const [desktopActive, setDesktopActive] = useState(false);
	const [changeLanguage, setChangeLanguage] = useState();

	useEffect(() => {
	  // Set language state based on local storage (client-side)
		const storedLanguage = localStorage.getItem("language");
		setChangeLanguage(storedLanguage || "sr");
	}, []);

	useCheckScreenSize(480, 820, setTabletActive);
	useCheckScreenSize(821, 9000, setDesktopActive);

	const handleLanguageChange = (selectedLanguage) => {
		setChangeLanguage(selectedLanguage);
		localStorage.setItem("language", selectedLanguage);
	};

	return (
		<main className={styles.main}>
			<Navbar
				linkOne={t("linkOne")}
				linkTwo={t("linkTwo")}
				linkThree={t("linkThree")}
				linkFour={t("linkFour")}
				handleLanguageChange={handleLanguageChange}
			/>

			<section id="home" className={styles.desktopIntro}>
				<div
					className={`${styles.imgContainer} ${styles.imgContainerDimensions}`}
				>
					<Image
						className={styles.kidsPhoto}
						src="/svgs/photos/kids.svg"
						width={100}
						height={100}
						alt="happy kids"
					/>
				</div>

				<div
					className={`${styles.containerGap} ${
						desktopActive ? styles.introInfoDesktop : ""
					}`}>
					<TextBlock
						headingType
						heading="headingBig"
						headingOneContent={t("introTitle")}
					/>

					{!desktopActive ? (
						<>
							<TextBlock paragraph paragraphContent={t("introExplanation")} />

							<TextBlock
								headingType
								heading="headingSmaller"
								headingOneContent={t("secondaryHeading")}
							/>
						</>
					) : (
						<TextBlock
							paragraph
							isCentered={desktopActive}
							paragraphContent={t("extraIntroDesktop")}
						/>
					)}

					<Button
						space="btnOutSpace"
						link="addLink"
						linkId="#form"
						btnTitle={t("buttonSchedule")}
					/>
				</div>
			</section>

			<section
				className={`${styles.containerGap} ${
					desktopActive ? styles.sectionDesktop : ""
				}`}
			>
				{desktopActive && (
					<>
						<TextBlock
							headingType
							heading="headingBig"
							headingOneContent={t("extraHeadingDesktop")}
						/>

						<TextBlock
							paragraph
							paragraphContent={t("introExplanationDesktop")}
						/>

						<TextBlock
							headingType
							heading="headingBig"
							headingOneContent={t("secondaryHeading")}
						/>
					</>
				)}
			</section>

			<section
				className={
					desktopActive ? styles.aboutSectiondesktop : styles.containerGap
				}
				id="about"
			>
				<div
					className={
						desktopActive ? styles.aboutDesktop : styles.imgContainerDimensions
					}
				>
					<Image
						className={styles.imagePhoto}
						src="/svgs/photos/melisa.svg"
						width={100}
						height={100}
						alt="melisas's profile"
					/>
				</div>

				<div className={styles.aboutText}>
					<TextBlock
						bold="bold"
						align="justify"
						headingTwoContent={t("aboutTitle")}
					/>
					<TextBlock paragraph paragraphContent={t("aboutParagraph")} />
				</div>
			</section>

			<section className={styles.containerGap}>
				{!desktopActive && changeLanguage === "en" ? (
					<>
						{activitiesImgEnglish.map((activity, index) => (
							<ImgText key={index} tabletActive={tabletActive} {...activity} />
					))}
					</>
				) : (
					!desktopActive && changeLanguage === "sr" && (
					<>
						{activitiesImgSerbian.map((activity, index) => (
							<ImgText key={index} tabletActive={tabletActive} {...activity} />
						))}
					</>
					)
				)}
			</section>

			{desktopActive && changeLanguage === "en" ? (
				<Carousel desktopActive={desktopActive} slides={activitiesImgEnglish} />
			) : (

			desktopActive && changeLanguage === "sr" && (
				<Carousel desktopActive={desktopActive} slides={activitiesImgSerbian} />
			))}

			<section className={styles.containerGap} id="prices">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={t("pricesHeading")}
				/>
				<TextBlock
					uppercase="uppercase"
					headingTwoContent={t("promotionInfo")}
				/>

				<div className={styles.containerPrices}>
					<Image
						className={styles.prices}
						src="/svgs/elements/price-one-kid.svg"
						width={248}
						height={225}
						alt="price for one kid"
					/>
					<Image
						className={styles.prices}
						src="/svgs/elements/price-two-kids.svg"
						width={248}
						height={225}
						alt="price for two kids"
					/>
					<Image
						className={styles.prices}
						src="/svgs/elements/price-three-kids.svg"
						width={248}
						height={225}
						alt="price for three kids"
					/>
				</div>
			</section>

			<section className={styles.containerGap}>
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={t("testimonialsHeading")}
				/>
				<Image
					className={styles.birdLogo}
					src="/svgs/logo/logo-bird.svg"
					width={100}
					height={100}
					alt="logo without brand name"
				></Image>
			</section>

			{changeLanguage === "en" ?
				(<Carousel
					carouselText
					slides={reviewsEnglish}
					textOne="testimonial"
					textTwo="writer"
				/>) : 
				(<Carousel
					carouselText
					slides={reviewsSerbian}
					textOne="testimonial"
					textTwo="writer"
				/>)
			}
			
			<div className={styles.containerGap} id="contact">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={t("formHeading")}
				/>
			</div>

			{changeLanguage === "en" ? (
				<Form
				tabletActive={tabletActive}
				desktopActive={desktopActive}
				lang={changeLanguage}
				onSubmit={(event) => {
					event.preventDefault();
				
					const message = {
						Name: scheduleFormInputEnglish[0].value,
						Phone: scheduleFormInputEnglish[1].value,
						Email: scheduleFormInputEnglish[2].value,
						"Starting Date": scheduleFormInputEnglish[3].value,
						"Ending Date": scheduleFormInputEnglish[4].value,
						Message: scheduleFormInputEnglish[5].value,
					};

					sendEmail(message);
				}}
				>
				{scheduleFormInputEnglish.map((input, index) => {
					return (
						<Input
							key={index}
							name={input.inputName}
							type={input.type}
							icon={input.icon}
							isTablet={tabletActive}
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
			) : 
				(<Form
				tabletActive={tabletActive}
				desktopActive={desktopActive}
				lang={changeLanguage}
				onSubmit={(event) => {
					event.preventDefault();
				
					const message = {
						Name: scheduleFormInputSerbian[0].value,
						Phone: scheduleFormInputSerbian[1].value,
						Email: scheduleFormInputSerbian[2].value,
						"Starting Date": scheduleFormInputSerbian[3].value,
						"Ending Date": scheduleFormInputSerbian[4].value,
						Message: scheduleFormInputSerbian[5].value,
					};

					sendEmail(message);
				}}
			>
				{scheduleFormInputSerbian.map((input, index) => {
					return (
						<Input
							key={index}
							name={input.inputName}
							type={input.type}
							icon={input.icon}
							isTablet={tabletActive}
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
			)}
	
			<section className={`${styles.containerGap} ${styles.lastSection}`}>
				<TextBlock
					headingType
					heading="headingPlayfullSmaller"
					headingOneContent={t("callToActionHeading")}
				/>
				<TextBlock
					bold="bold"
					hasSmallerWidth={tabletActive}
					headingTwoContent={t("callToActionInfoOne")}
				/>
				<TextBlock
					bold="bold"
					hasSmallerWidth={tabletActive}
					headingTwoContent={t("callToActionInfoTwo")}
				/>
			</section>

			<Footer desktopActive={desktopActive} />
		</main>
	);
}
