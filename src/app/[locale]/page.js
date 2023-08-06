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
import { useState } from "react";
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
import { usePathname } from "next/navigation";

export default async function Home() {
	const translate = useTranslations("Index");
	const [tabletActive, setTabletActive] = useState(false);
	const [desktopActive, setDesktopActive] = useState(false);
	const language = usePathname();

	useCheckScreenSize(480, 820, setTabletActive);
	useCheckScreenSize(821, 9000, setDesktopActive);

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
						src="/svgs/photos/kids.svg"
						width={100}
						height={100}
						alt="happy kids"
					/>
				</div>

				<div
					className={`${styles.containerGap} ${
						desktopActive ? styles.introInfoDesktop : ""
					}`}
				>
					<TextBlock
						headingType
						heading="headingBig"
						headingOneContent={translate("introTitle")}
					/>

					{!desktopActive ? (
						<>
							<TextBlock
								paragraph
								paragraphContent={translate("introExplanation")}
							/>

							<TextBlock
								headingType
								heading="headingSmaller"
								headingOneContent={translate("secondaryHeading")}
							/>
						</>
					) : (
						<TextBlock
							paragraph
							isCentered={desktopActive}
							paragraphContent={translate("extraIntroDesktop")}
						/>
					)}

					<Button
						space="btnOutSpace"
						link="addLink"
						linkId="#form"
						btnTitle={translate("buttonSchedule")}
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
						headingTwoContent={translate("aboutTitle")}
					/>
					<TextBlock paragraph paragraphContent={translate("aboutParagraph")} />
				</div>
			</section>

			<section className={styles.containerGap}>
				{!desktopActive && language === "/en" ? (
					<>
						{activitiesImgEnglish.map((activity, index) => (
							<ImgText key={index} tabletActive={tabletActive} {...activity} />
						))}
					</>
				) : (
					!desktopActive &&
					language === "/sr" && (
						<>
							{activitiesImgSerbian.map((activity, index) => (
								<ImgText
									key={index}
									tabletActive={tabletActive}
									{...activity}
								/>
							))}
						</>
					)
				)}
			</section>

			{desktopActive && language === "/en" ? (
				<Carousel desktopActive={desktopActive} slides={activitiesImgEnglish} />
			) : (
				desktopActive &&
				language === "/sr" && (
					<Carousel
						desktopActive={desktopActive}
						slides={activitiesImgSerbian}
					/>
				)
			)}

			<section className={styles.containerGap} id="prices">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={translate("pricesHeading")}
				/>
				<TextBlock
					uppercase="uppercase"
					headingTwoContent={translate("promotionInfo")}
				/>

				{language === "/en" ? (
					<div className={styles.containerPrices}>
						<Image
							className={styles.prices}
							src="/svgs/elements/prices-en/price-one-kid-en.svg"
							width={248}
							height={225}
							alt="price for one kid"
						/>
						<Image
							className={styles.prices}
							src="/svgs/elements/prices-en/price-two-kids-en.svg"
							width={248}
							height={225}
							alt="price for two kids"
						/>
						<Image
							className={styles.prices}
							src="/svgs/elements/prices-en/price-three-kids-en.svg"
							width={248}
							height={225}
							alt="price for three kids"
						/>
					</div>
				) : (
					<div className={styles.containerPrices}>
						<Image
							className={styles.prices}
							src="/svgs/elements/prices-sr/price-one-kid-sr.svg"
							width={248}
							height={225}
							alt="price for one kid"
						/>
						<Image
							className={styles.prices}
							src="/svgs/elements/prices-sr/price-two-kids-sr.svg"
							width={248}
							height={225}
							alt="price for two kids"
						/>
						<Image
							className={styles.prices}
							src="/svgs/elements/prices-sr/price-three-kids-sr.svg"
							width={248}
							height={225}
							alt="price for three kids"
						/>
					</div>
				)}
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

			{language === "/en" ? (
				<Carousel
					carouselText
					slides={reviewsEnglish}
					textOne="testimonial"
					textTwo="writer"
				/>
			) : (
				<Carousel
					carouselText
					slides={reviewsSerbian}
					textOne="testimonial"
					textTwo="writer"
				/>
			)}

			<div className={styles.containerGap} id="contact">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent={translate("formHeading")}
				/>
			</div>

			{language === "/en" ? (
				<Form
					tabletActive={tabletActive}
					desktopActive={desktopActive}
					lang={language}
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
			) : (
				<Form
					tabletActive={tabletActive}
					desktopActive={desktopActive}
					lang={language}
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
					headingOneContent={translate("callToActionHeading")}
				/>
				<TextBlock
					bold="bold"
					hasSmallerWidth={tabletActive}
					headingTwoContent={translate("callToActionInfoOne")}
				/>
				<TextBlock
					bold="bold"
					hasSmallerWidth={tabletActive}
					headingTwoContent={translate("callToActionInfoTwo")}
				/>
			</section>

			<Footer desktopActive={desktopActive} />
		</main>
	);
}
