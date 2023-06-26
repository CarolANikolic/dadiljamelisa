import PropTypes from 'prop-types';
import styles from './textblock.module.css'


const TextBlock = (props) => {
  return (
    <div>
      {props.headingType ? 
      <h1 className={`${props.heading === 'headingBig' ?
       styles.headingPlayfullBig : 
       props.heading === 'headingSmaller' ? 
       styles.headingPlayfullSmaller : ''} ${styles.headingPlayfull}`}>{props.
      headingOneContent}</h1> :

      <h2 className={`${props.bold === 'bold' ? 
      styles.headingRegularBold : 
      props.uppercase === 'uppercase' ? 
      styles.headingRegularUppercase : ''} ${props.align === "justify" ? styles.justifyedText : ''} ${styles.headingRegular} ${props.hasSmallerWidth === true ? styles.tabletWidth : ''}`}>{props.headingTwoContent}</h2>}
      {props.paragraph ? 
      
      <p className={`${styles.paragraphStyle} ${props.isCentered === true ? styles.centeredText :  styles.justifyedText}`}>{props.paragraphContent}</p> : ''}
    </div> 
  );
}

export default TextBlock;

TextBlock.propTypes = {
  headingType: PropTypes.bool,
  headingOneContent: PropTypes.string,
  headingTwoContent: PropTypes.string,
  paragraphContent: PropTypes.string,
  heading: PropTypes.string,
  isCentered: PropTypes.bool

};

