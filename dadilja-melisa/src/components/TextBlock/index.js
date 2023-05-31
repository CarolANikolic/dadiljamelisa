import PropTypes from 'prop-types';
import styles from './textblock.module.css'


const TextBlock = (props) => {
  return (
    <div className={styles.textBlockContainer}>
      {props.headingType ? 
      <h1 className={`${props.heading === 'headingBig' ? styles.headingPlayfullBig : props.heading === 'headingSmaller' ? styles.headingPlayfullSmaller : ''} ${styles.headingPlayfull}`}>{props.
      headingOneContent}</h1> :

      <h2 className={styles.headingRegular}>{props.headingTwoContent}</h2>}
      {props.paragraph ? 
      
      <p className={styles.paragraphStyle}>{props.paragraphContent}</p> : ''}
    </div> 
  );
}

export default TextBlock;

TextBlock.propTypes = {
  headingType: PropTypes.bool,
  headingOneContent: PropTypes.string,
  headingTwoContent: PropTypes.string,
  paragraphContent: PropTypes.string,
  heading: PropTypes.string

};

