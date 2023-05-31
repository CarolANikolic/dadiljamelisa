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
                    <Image className={styles.logo} src="./svgs/logo-horizontal.svg" width={100} height={80} alt="Dadilja Melisa logo"/>
                </div>

                <div className={styles.listContainer}>
                    <Menu menuTitle="Menu" toggle={{menu, setMenu}}/>
                    {menu &&
                    <ul className={styles.list}>
                        <li><Link className={styles.listItem} href="/">Home</Link></li>
                        <li><Link className={styles.listItem} href="/">About</Link></li>
                        <li><Link className={styles.listItem} href="/">Prices</Link></li>
                        <li><Link className={styles.listItem} href="/">Contact</Link></li> 
                    </ul>
                    }
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