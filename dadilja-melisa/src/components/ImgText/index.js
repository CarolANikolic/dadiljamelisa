import Image from 'next/image';
import activitiesImg from '/src/assets/objects/activitiesImg.js';
import styles from './imgText.module.css';
import TextBlock from '../TextBlock';

const ImageAndText = () => {
    return activitiesImg.map((activity) => (
        <div className={styles.container}>
            <div className={styles.activityImgContainer}>
                <Image className={styles.activityImg} src={activity.source} width={100} height={100} alt={activity.alt} />
            </div>

            <div className={`${activity.color === "green" ? styles.green :
            activity.color === "yellow" ? styles.yellow : 
            activity.color === "beige" ? styles.beige :
            activity.color === "darkPink" ? styles.darkPink : ''} ${styles.explanationContainer}`}>
                <TextBlock headingTwoContent={activity.heading}/>
                <TextBlock paragraph paragraphContent={activity.paragraph}/>
            </div>
        </div>
    ));
};

export default ImageAndText;
