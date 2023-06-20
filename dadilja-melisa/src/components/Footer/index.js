import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
    const emailTitle = "Schedule a weekend care";
    const mailtoUrl = `mailto:mailto:dadiljamelisa@gmail.com?subject=${encodeURIComponent(emailTitle)}`;
    const telNumber = `tel:+381-064-0808-316`;

    return (
        <footer className={styles.footer}>
            <Image className={styles.logo} src="/svgs/logo/logo-vertical.svg" width={149} height={103} alt="Dadilja Melisa logo in vertical"/>

            <div className={styles.footerText}>
                <div className={styles.block}>
                    <h1 className={styles.title}>About</h1>
                    <ul className={styles.linkList}>
                        <li><Link className={styles.link} href="/">Home</Link></li>
                        <li><Link className={styles.link} href="/">About</Link></li>
                        <li><Link className={styles.link} href="/">Reviews</Link></li>
                    </ul>
                </div>
            
                <div className={styles.block}>
                    <h1 className={styles.title}>Services</h1>
                    <ul className={styles.linkList}>
                        <li><Link className={styles.link} href="/">Prices</Link></li>
                        <li><Link className={styles.link} href="/">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.block}>
                    <h1 className={styles.title}>Contact</h1>
                    <ul className={styles.linkList}>
                        <li className={styles.contactInfo}><Image src="/svgs/icons/map-pin.svg" width={20} height={20} alt="map pin"/>Narodnog Fronta 77lj, MML</li>
                        <li className={styles.contactInfo}><Image src="/svgs/icons/mail.svg" width={20} height={20} alt="mail"/><a className={styles.link} href={mailtoUrl}>dadiljamelisa@gmail.com</a></li>
                        <li className={styles.contactInfo}><Image src="/svgs/icons/phone.svg" width={20} height={20} alt="phone"/><a className={styles.link} href={telNumber}>064/0808-316</a></li>
                    </ul>
                </div>       
            </div>
            
            <div className={styles.copyright}>
                <p>Copyright © 2023. Dadilja Melisa. All rights reserved.</p>
                <p>Developed by Web Circle</p>
            </div>
        </footer>
    )
};

export default Footer