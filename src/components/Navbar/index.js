import Link from "next-intl/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import Menu from "../Menu";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
	const [menu, setMenu] = useState(false);
	const [languageSelector, setLanguageSelector] = useState(false);

	return (
		<nav>
			<div className={styles.logoContainer}>
				<Image
					className={styles.logo}
					src="./svgs/logo/logo-horizontal.svg"
					width={100}
					height={80}
					alt="Dadilja Melisa logo"
				/>
			</div>

			<div
				className={`${styles.listContainer} ${styles.listContainerRelative}`}
			>
				<Menu menuTitle="Menu" toggle={{ menu, setMenu }} />

				<ul className={`${styles.list} ${menu && styles.active}`}>
					<li>
						<a className={styles.listItem} href="#home">
							{props.linkOne}
						</a>
					</li>
					<li>
						<a className={styles.listItem} href="#about">
							{props.linkTwo}
						</a>
					</li>
					<li>
						<a className={styles.listItem} href="#prices">
							{props.linkThree}
						</a>
					</li>
					<li>
						<a className={styles.listItem} href="#contact">
							{props.linkFour}
						</a>
					</li>
				</ul>
			</div>

			<div className={styles.listContainer}>
				<div className={styles.selectLng}>
					<p
						className={styles.langSelector}
						onClick={() => setLanguageSelector(!languageSelector)}
					>
						Language
					</p>
					{languageSelector && (
						<div className={styles.langOptionsContainer}>
							<Link className={styles.langOptions} href="/" locale="en">
								English
							</Link>
							<Link className={styles.langOptions} href="/" locale="sr">
								Serbian
							</Link>
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
	linkFour: PropTypes.string,
};
