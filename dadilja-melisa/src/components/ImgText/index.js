import Image from 'next/image';
import styles from './imgText.module.css';
import TextBlock from '../TextBlock';
import { useState } from 'react';

const ImageAndText = ({source, alt, heading, paragraph, color}) => {
    const [showText, setShowText] = useState(false);

    return (
        
        <div className={styles.container} >
            <div className={styles.activityImgContainer}>
                <Image className={styles.activityImg} src={source} width={100} height={100} alt={alt} />
                {!showText && (
                <div className={styles.content} onClick={() => setShowText(true)}>
                <p>Learn more</p>  
                </div>
                )
                }
            </div>

            {showText && (
                <div className={`${color === "green" ? styles.green :
                color === "yellow" ? styles.yellow : 
                color === "beige" ? styles.beige :
                color === "darkPink" ? styles.darkPink : ''} ${styles.explanationContainer}`}>
                    
                <TextBlock headingTwoContent={heading}/>
                    <TextBlock paragraph paragraphContent={paragraph}/>
                    <br/>
                    <Image className={styles.closeIcon} src="/svgs/icons/close.svg" width={40} height={40} alt="x close" onClick={() => setShowText(false)}></Image>
            </div>
            )
            }
        </div>
    );
   
};

export default ImageAndText;