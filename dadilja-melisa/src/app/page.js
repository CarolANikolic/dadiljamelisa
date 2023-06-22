"use client"
import TextBlock from '@/components/TextBlock';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button';
import ImgText from '@/components/ImgText';
import Footer from '@/components/Footer';
import activitiesImg from '@/assets/objects/activitiesImg';
import Carousel from '@/components/Carousel';
import reviews from '@/assets/objects/reviews';
import { useState } from 'react';
import checkScreenSize from '@/assets/functions/checkScreenSize';
import Form from '@/components/Form/Form';
import sendEmail from '@/assets/functions/sendEmail'

export default function Home() {
  const [tabletActive, setTabletActive] = useState(false);

//   Call useEffect function tohandle screen resizing for responsiveness - Tablet
  checkScreenSize(481, 820, setTabletActive);
  return (
    <main className={styles.main}>
        <Navbar/>

        <section id="home">
          <div className={`${styles.imgContainer} ${styles.imgContainerDimensions}`}>
            <Image className={styles.imagePhoto} src="/svgs/photos/kids.svg" width={100} height={100} alt="happy kids"/>
          </div>

          <div className={styles.containerGap}>
            <TextBlock headingType heading="headingBig" headingOneContent="Your Trusted Educator and Nanny for a Relaxing Weekend Without Children!"/>

            <TextBlock paragraph paragraphContent="Are you craving a much-needed break? Whether you have obligations to attend to, want to enjoy a night out with friends, or simply need time to rest and recharge, I have you covered. I'm Melisa, a professional and experienced caregiver. With my 24-hour babysitting services you can enjoy a worry-free break. Comprehensive Development: I offer a diverse range of activities, workshops, and educational subjects, ensuring your child's holistic growth. Nurturing Environment:  My work is based on creating a supportive and inclusive space, fostering positive social connections and valuable mentorship. Collaborative Learning: I encourage siblings to learn from each other, build friendships, and inspire one another, fostering a supportive and enriching environment."/>
            
            <TextBlock headingType heading="headingSmaller" headingOneContent="The only nanny and educator that offers a 24h care service in Belgrade!"/>

            <Button space="btnOutSpace" link="addLink" linkId="#form"  btnTitle="Scheduele"/>
          </div>
        </section>

        <section className={styles.containerGap} id="about">
          <div className={styles.imgContainerDimensions}>
            <Image className={styles.imagePhoto} src="/svgs/photos/melisa.svg"  width={100} height={100} alt="melisas's profile"/>
          </div>
          
          <TextBlock bold="bold" align="justify" headingTwoContent="Hi, I’m Melisa. I'm not just a nanny, I'm an educator with a Teacher Education Faculty degree."/>
          <TextBlock paragraph paragraphContent="As an educator, I go beyond traditional childcare. With me, your children thrive through enriching workshops, tailored educational programs, fun-filled sports activities, and exciting field trips. Trust me to care for your children and educate and empower them for a bright future."/>
        </section>

        <section className={styles.containerGap}>
          {activitiesImg.map((activity, index) =>  
            <ImgText key={index} {...activity}/> 
            )
          }
        </section>
        
        <section className={styles.containerGap} id="prices">
          <TextBlock headingType heading="headingSmaller" headingOneContent="Competitive and Transparent Pricing"/>
          <TextBlock uppercase="uppercase" headingTwoContent="Weekend promotion 24H for EUR 50"/>

          <div className={styles.containerPrices}>
            <Image className={styles.prices} src="/svgs/elements/price-one-kid.svg" width={248} height={225} alt="price for one kid"/>
            <Image className={styles.prices} src="/svgs/elements/price-two-kids.svg" width={248} height={225} alt="price for two kids"/>
            <Image className={styles.prices} src="/svgs/elements/price-three-kids.svg" width={248} height={225} alt="price for three kids"/>
          </div>
        </section>
        
        <section className={styles.containerGap}>
          <TextBlock headingType heading='headingSmaller' headingOneContent="What the parents have to say"/>
          <Image className={styles.birdLogo} src="/svgs/logo/logo-bird.svg" width={100} height={100} alt="logo without brand name"></Image>
        </section>
          <Carousel slides={reviews} textOne="testimonial" textTwo="writer"/>

        <div className={styles.containerGap} id="contact">
          <TextBlock headingType heading="headingSmaller" headingOneContent="I'm here to help! Get in touch to schedule your child’s nurturing care!"/>
        </div>


        <Form 
        tabletActive={tabletActive} 
        imgOnePath="/svgs/elements/girl-drawing.svg"
        imgOneAlt="girl drawing"

        imgTwoPath="/svgs/elements/sun.svg"
        imgTwoAlt="girl drawing"

        inputOneName="Name"
        inputOneType="text"
        inputOnePlaceholder="Ana Petrović"
        
        inputTwoName="Phone"
        inputTwoType="tel"
        inputTwoPlaceholder="064/0888-888"
        
        inputThreeName="Email"
        inputThreeType="email"
        inputThreeePlaceholder="email@email.com"
        
        calendarOneLabel="Starting date"
        calendarOneName="startDate"
        
        calendarTwoLabel="Ending date"
        calendarTwoName="endDate"
        
        inputFourLabel="Message"
        inputFourPlaceholder="Hi Melisa, I want to schedule a weekend care for my kid!"
        
        btnContainer="btnOutSpace"
        btnTitle="Scheduele"
        btnAction={sendEmail}
        
        bottomImgTablet="/svgs/elements/drawings-tablet.svg"
        bottomImgMobile="/svgs/elements/drawings.svg"
        bottomImgAlt="drawings"
        />
  

        <section className={styles.containerGap}>
          <TextBlock headingType heading="headingPlayfullSmaller" headingOneContent="Let me provide exceptional care for your child while you enjoy a well-deserved break!"/>
          <TextBlock bold="bold" hasSmallerWidth={tabletActive} headingTwoContent="Conveniently, I'm available for 24-hour care on weekends. Appointments can also be made for weekdays."/>
          <TextBlock bold="bold" hasSmallerWidth={tabletActive} headingTwoContent="Say goodbye to concerns about relying on grandparents or other caregivers. Make an appointment!"/>
        </section>


        <Footer/>
    </main>
  );
}