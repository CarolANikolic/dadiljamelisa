"use client"
import TextBlock from '@/components/TextBlock';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import Image from 'next/image';
import Menu from '@/components/Menu';
import Button from '@/components/Button';
import ImgText from '@/components/ImgText';

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar/>

        <section>
          <div className={`${styles.imgContainer} ${styles.imgContainerDimensions}`}>
            <Image className={styles.image} src="/svgs/kids.svg" width={100} height={100} alt="happy kids"/>
          </div>

          <div className={styles.containerGap}>
            <TextBlock headingType heading="headingBig" headingOneContent="Your Trusted Educator and Nanny for a Relaxing Weekend Without Children!"/>

            <TextBlock paragraph paragraphContent="Are you craving a much-needed break? Whether you have obligations to attend to, want to enjoy a night out with friends, or simply need time to rest and recharge, I have you covered. I'm Melisa, a professional and experienced caregiver. With my 24-hour babysitting services you can enjoy a worry-free break. Comprehensive Development: I offer a diverse range of activities, workshops, and educational subjects, ensuring your child's holistic growth. Nurturing Environment:  My work is based on creating a supportive and inclusive space, fostering positive social connections and valuable mentorship. Collaborative Learning: I encourage siblings to learn from each other, build friendships, and inspire one another, fostering a supportive and enriching environment."/>
            
            <TextBlock headingType heading="headingSmaller" headingOneContent="The only nanny and educator that offers a 24h care service in Belgrade!"/>

            <Button space="btnOutSpace" btnTitle="Scheduele"/>
          </div>
        </section>

        <section className={styles.containerGap}>
          <div className={styles.imgContainerDimensions}>
            <Image className={styles.image} src="/svgs/melisa.svg"  width={100} height={100} alt="melisas's profile"/>
          </div>
          
          <TextBlock headingTwoContent="Hi, I’m Melisa. I'm not just a nanny, I'm an educator with a Teacher Education Faculty degree."/>
          <TextBlock paragraph paragraphContent="As an educator, I go beyond traditional childcare. With me, your children thrive through enriching workshops, tailored educational programs, fun-filled sports activities, and exciting field trips. Trust me to care for your children and educate and empower them for a bright future."/>
        </section>

        <section>
          <ImgText/>
        </section>
    </main>
  );
}