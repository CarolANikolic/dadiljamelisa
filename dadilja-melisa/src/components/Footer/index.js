import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    const emailTitle = "Schedule a weekend care";
    const mailtoUrl = `mailto:mailto:dadiljamelisa@gmail.com?subject=${encodeURIComponent(emailTitle)}`;
    const telNumber = `tel:+381-064-0808-316`;

    return (
        <footer>
            <Image src="/svgs/logo-vertical.svg" width={149} height={103} alt="Dadilja Melisa logo in vertical"/>
            <h1>About</h1>
                <ul>
                    <li><Link  href="/">Home</Link></li>
                    <li><Link  href="/">About</Link></li>
                    <li><Link  href="/">Reviews</Link></li>
                </ul>
            
            <h1>Services</h1>
                <ul>
                    <li><Link  href="/">Prices</Link></li>
                    <li><Link  href="/">Contact</Link></li>
                </ul>
                
            <h1>Contact</h1>
                <ul>
                    <li><Image src="/svgs/icons/map-pin.svg" width={20} height={20} alt="map pin"/>Narodnog Fronta 77lj, MML</li>
                    <li><Image src="/svgs/icons/mail.svg" width={20} height={20} alt="mail"/><a href={mailtoUrl}>dadiljamelisa@gmail.com</a></li>
                    <li><Image src="/svgs/icons/phone.svg" width={20} height={20} alt="phone"/><a href={telNumber}>064/0808-316</a></li>
                </ul>
            
            <hr></hr>
            <div>
                <p>Copyright © 2023. Dadilja Melisa. All rights reserved.</p>
                <p>Developed by Web Circle</p>
            </div>
        </footer>
    )
};

export default Footer