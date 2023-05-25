import TextBlock from '@/components/TextBlock';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';
import Image from 'next/image';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar/>

        <section>
          <div className={`${styles.container} ${styles.containerDimensions}`}>
            <Image className={styles.image} src="/svgs/kids.svg" width={100} height={100} alt="happy kids"/>
          </div>

          <TextBlock headingType heading="headingBig" headingOneContent="Your Trusted Educator and Nanny for a Relaxing Weekend Without Children!"
          paragraph paragraphContent="Are you craving a much-needed break? Whether you have obligations to attend to, want to enjoy a night out with friends, or simply need time to rest and recharge, I have you covered. I'm Melisa, a professional and experienced caregiver. With my 24-hour babysitting services you can enjoy a worry-free break. Comprehensive Development: I offer a diverse range of activities, workshops, and educational subjects, ensuring your child's holistic growth. Nurturing Environment:  My work is based on creating a supportive and inclusive space, fostering positive social connections and valuable mentorship. Collaborative Learning: I encourage siblings to learn from each other, build friendships, and inspire one another, fostering a supportive and enriching environment."/>
          
          <TextBlock headingType heading="headingSmaller" headingOneContent="The only nanny and educator that offers a 24h care service in Belgrade!"/>
        </section>
    </main>
  );
}