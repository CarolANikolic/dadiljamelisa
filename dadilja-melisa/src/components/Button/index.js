import styles from './btn.module.css';
import propTypes from 'prop-types';
import Link from 'next/link';

const Btn = (props) => {
  return (
    <div className={`${props.space === "btnOutSpace" ? styles.btnContainerDimensions : ''} ${styles.btnContainer}`}>
      {props.link === "addLink" ? (
        <Link href={props.linkId} className={styles.generalBtn}>
          {props.btnTitle}
        </Link>
      ) : (
        <button className={styles.generalBtn}>{props.btnTitle}</button>
      )}
    </div>
  );
};

export default Btn;

Btn.propTypes = {
  space: propTypes.string,
  btnTitle: propTypes.string,
  link: propTypes.string,
  linkId: propTypes.string,
};
