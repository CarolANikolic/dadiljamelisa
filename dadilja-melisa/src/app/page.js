"use client";
import TextBlock from "@/components/TextBlock";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button";
import ImgText from "@/components/ImgText";
import Footer from "@/components/Footer";
import activitiesImg from "@/assets/objects/activitiesImg";
import Carousel from "@/components/Carousel";
import reviews from "@/assets/objects/reviews";
import { useState } from "react";
import Form from "@/components/Form/Form";
import sendEmail from "@/assets/functions/sendEmail";
import useCheckScreenSize from "@/hooks/useCheckScreenSize";
import Input from "@/components/Input";
import scheduleFormInput from "@/assets/objects/scheduleFormInput";

export default function Home() {
	const [tabletActive, setTabletActive] = useState(false);
	const [desktopActive, setDesktopActive] = useState(false);

	//   Call useEffect function tohandle screen resizing for responsiveness - Tablet
	useCheckScreenSize(480, 820, setTabletActive);
	useCheckScreenSize(821, 9000, setDesktopActive);

	return (
		<main className={styles.main}>
			<Navbar />

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

				<div className={`${styles.containerGap} ${desktopActive ? styles.introInfoDesktop : ''}`}>
					<TextBlock
						headingType
						heading="headingBig"
						headingOneContent="Your Trusted Educator and Nanny for a Relaxing Weekend Without Children!"
					/>
				
					{!desktopActive ? 
					<>
					<TextBlock
						paragraph
						
						paragraphContent="Are you craving a much-needed break? Whether you have obligations to attend to, want to enjoy a night out with friends, or simply need time to rest and recharge, I have you covered. I'm Melisa, a professional and experienced caregiver. With my 24-hour babysitting services you can enjoy a worry-free break. Comprehensive Development: I offer a diverse range of activities, workshops, and educational subjects, ensuring your child's holistic growth. Nurturing Environment:  My work is based on creating a supportive and inclusive space, fostering positive social connections and valuable mentorship. Collaborative Learning: I encourage siblings to learn from each other, build friendships, and inspire one another, fostering a supportive and enriching environment."
					/>
					
					<TextBlock
						headingType
						heading="headingSmaller"
						headingOneContent="The only nanny and educator that offers a 24h care service in Belgrade!"
					/>
					</>
					 : 
						<TextBlock
						paragraph
						isCentered={desktopActive}
						paragraphContent="Are you craving a much-needed break? Whether you have obligations to attend to, want to enjoy a night out with friends, or simply need time to rest and recharge, I have you covered. I'm Melisa, a professional and experienced caregiver. With my 24-hour babysitting services you can enjoy a worry-free break."
					/>
					}
			
					<Button
						space="btnOutSpace"
						link="addLink"
						linkId="#form"
						btnTitle="Scheduele"
					/>
				</div>
			</section>
			
			<section className={`${styles.containerGap} ${desktopActive ? styles.sectionDesktop : ''}`}>

				{desktopActive && 

				<>
					<TextBlock
					headingType
					heading="headingBig"
					headingOneContent="Nurturing all-round development for your child's flourishing future."
					/>	
					
					<TextBlock
					paragraph
					paragraphContent="I prioritize the well-being and development of your child in a nurturing environment where your child can thrive. From creative workshops that encourage imagination and fine motor skills, to an educational program covering various subjects like math, speech, environment, music, physics, and art, to engaging sports activities such as relay games, competitive games, polygons, story polygons, and dance activities - your child will have a well-rounded experience. I also offer the opportunity for field trips and visits to local communities, such as museums and theatres, to broaden your child's horizons and provide enriching experiences.
					By facilitating interactions between children of different ages, I encourage positive social interactions and provide opportunities for older children to mentor and inspire their younger siblings. This creates a supportive and inclusive environment where children learn from each other, build friendships, and develop valuable social skills."
					/>

					<TextBlock
					headingType
					heading="headingBig"
					headingOneContent="The only nanny and educator that offers a 24h care service in Belgrade!"
					/>	
				</>
				}

			</section>

			<section className={desktopActive ? styles.aboutSectiondesktop : styles.containerGap} id="about">
				<div className={desktopActive ? styles.aboutDesktop : styles.imgContainerDimensions}>
				
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
						headingTwoContent="Hi, I’m Melisa. I'm not just a nanny, I'm an educator with a Teacher Education Faculty degree."
					/>
					<TextBlock
						paragraph
						paragraphContent="As an educator, I go beyond traditional childcare. With me, your children thrive through enriching workshops, tailored educational programs, fun-filled sports activities, and exciting field trips. Trust me to care for your children and educate and empower them for a bright future."
					/>
				</div>
			
			</section>

			<section className={styles.containerGap}>
				{activitiesImg.map((activity, index) => (
					<ImgText key={index} tabletActive={tabletActive} {...activity} />
				))}
			</section>

			<section className={styles.containerGap} id="prices">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent="Competitive and Transparent Pricing"
				/>
				<TextBlock
					uppercase="uppercase"
					headingTwoContent="Weekend promotion 24H for EUR 50"
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
					headingOneContent="What the parents have to say"
				/>
				<Image
					className={styles.birdLogo}
					src="/svgs/logo/logo-bird.svg"
					width={100}
					height={100}
					alt="logo without brand name"
				></Image>
			</section>
			<Carousel slides={reviews} textOne="testimonial" textTwo="writer" />

			<div className={styles.containerGap} id="contact">
				<TextBlock
					headingType
					heading="headingSmaller"
					headingOneContent="I'm here to help! Get in touch to schedule your child’s nurturing care!"
				/>
			</div>

			<Form
				tabletActive={tabletActive}
				onSubmit={(event) => {
					event.preventDefault();

					const message = {
						Name: scheduleFormInput[0].value,
						Phone: scheduleFormInput[1].value,
						Email: scheduleFormInput[2].value,
						"Starting Date": scheduleFormInput[3].value,
						"Ending Date": scheduleFormInput[4].value,
						Message: scheduleFormInput[5].value,
					};

					sendEmail(message);
				}}
			>
				{scheduleFormInput.map((input, index) => {
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

			<section className={styles.containerGap}>
				<TextBlock
					headingType
					heading="headingPlayfullSmaller"
					headingOneContent="Let me provide exceptional care for your child while you enjoy a well-deserved break!"
				/>
				<TextBlock
					bold="bold"
					hasSmallerWidth={tabletActive}
					headingTwoContent="Conveniently, I'm available for 24-hour care on weekends. Appointments can also be made for weekdays."
				/>
				<TextBlock
					bold="bold"
					hasSmallerWidth={tabletActive}
					headingTwoContent="Say goodbye to concerns about relying on grandparents or other caregivers. Make an appointment!"
				/>
			</section>

			<Footer />
		</main>
	);
}
