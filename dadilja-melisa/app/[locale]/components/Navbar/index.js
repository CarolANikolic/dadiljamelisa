import Link from 'next-intl/link';
import styles from './navbar.module.css'
import Image from 'next/image';
import Menu from '../Menu';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const [menu, setMenu] = useState(false);
    const [language, setLanguage] = useState(false);

    return (
            <nav>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src="./svgs/logo/logo-horizontal.svg" width={100} height={80} alt="Dadilja Melisa logo"/>
                </div>

                <div className={`${styles.listContainer} ${styles.listContainerRelative}`}>
                    <Menu menuTitle="Menu" toggle={{menu, setMenu}}/>
                    
                    <ul className={`${styles.list} ${menu && styles.active}`}>
                    <li><Link className={styles.listItem} href="#home">{props.linkOne}</Link></li>
                        <li><Link className={styles.listItem} href="#about">{props.linkTwo}</Link></li>
                        <li><Link className={styles.listItem} href="#prices">{props.linkThree}</Link></li>
                        <li><Link className={styles.listItem} href="#contact">{props.linkFour}</Link></li> 
                    </ul>
                    
                </div>

                <div className={styles.listContainer}>
                    <div className={styles.selectLng}>
                    <p className={styles.langSelector}  onClick={() => setLanguage(!language)}>Language</p>
                    {language && (
                        <div className={styles.langOptionsContainer}>
                            <Link className={styles.langOptions} href="/" locale="en">English</Link>
                            <Link className={styles.langOptions} href="/" locale="sr">Serbian</Link>
                        </div>
                    )}

                    </div>
                </div>
            </nav>
    );
};

export default Navbar;

Navbar.propTypes = {
    linkOne: PropTypes.string,
    linkTwo: PropTypes.string,
    linkThree: PropTypes.string,
    linkFour: PropTypes.string
}