import Link from 'next/link';
import styles from './navbar.module.css'
import Image from 'next/image';
import Menu from '@/components/Menu';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
            <nav>
                <div className={styles.logoContainer}>
                    <Image className={styles.logo} src="./svgs/logo/logo-horizontal.svg" width={100} height={80} alt="Dadilja Melisa logo"/>
                </div>

                <div className={`${styles.listContainer} ${styles.listContainerRelative}`}>
                    <Menu menuTitle="Menu" toggle={{menu, setMenu}}/>
                    
                    <ul className={`${styles.list} ${menu && styles.active}`}>
                        <li><Link className={styles.listItem} href="#home">Home</Link></li>
                        <li><Link className={styles.listItem} href="#about">About</Link></li>
                        <li><Link className={styles.listItem} href="#prices">Prices</Link></li>
                        <li><Link className={styles.listItem} href="#contact">Contact</Link></li> 
                    </ul>
                    
                </div>

                <div className={styles.listContainer}>
                    
                    <select className={styles.selectLng} name="language" id="language">
                        <option value="English">English</option>
                        <option value="Serbian">Serbian</option>
                    </select>
                </div>
            </nav>
    );
};

export default Navbar;