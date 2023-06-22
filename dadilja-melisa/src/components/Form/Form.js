import sendEmail from '@/assets/functions/sendEmail';
import styles from './form.module.css'
import Input from '@/components/Input';
import CalendarInput from '../Calendar';
import Image from 'next/image';
import Button from '@/components/Button';
import propTypes from 'prop-types';

const Form = (props, tabletActive) => {
    
    return (
        <form id="form" className={`${!props.tabletActive ? styles.contactForm : 
        styles.tabletForm}`} 
        onSubmit={sendEmail}>
        <div className={styles.tabletContainer}>
          <Image 
          src={props.imgOnePath} 
          width={195} 
          height={125} 
          alt={props.imgOneAlt}>
          </Image>

          <Image 
          className={styles.sunDrawing} 
          src={props.imgTwoPath} 
          width={71} 
          height={65}
          alt={props.imgTwoAlt}>
          </Image>  

          <Input 
          user 
          generalInput 
          name={props.inputOneName}
          type={props.inputOneType}
          isTablet={tabletActive} 
          placeholder={props.inputOnePlaceholder}/>

          <Input 
          phone 
          generalInput 
          name={props.inputTwoName} 
          type={props.inputTwoType} 
          isTablet={tabletActive} 
          placeholder={props.inputTwoPlaceholder}/>

          <Input 
          mail 
          generalInput 
          name={props.inputThreeName}
          type={props.inputThreeType}
          isTablet={tabletActive} 
          placeholder={props.inputThreeePlaceholder}/>
       
          <CalendarInput 
          labelName={props.calendarOneLabel} 
          name={props.calendarOneName}
          isTablet={tabletActive}/>

          <CalendarInput 
          labelName={props.calendarTwoLabel} 
          name={props.calendarTwoName} 
          isTablet={tabletActive}/>

          <Input 
          messageBox 
          messageName={props.inputFourLabel}
          placeholder={props.inputFourPlaceholder}/>
        </div>

          <Button 
          space={props.btnContainer}
          btnTitle={props.btnTitle}
          onSubmit={props.btnAction}/>

          <Image 
          className={styles.drawings} 
          src={`${props.tabletActive ? props.bottomImgTablet : 
          props.bottomImgMobile}`} 
          width={300} 
          height={100} 
          alt={props.bottomImgAlt}>
          </Image>
      </form>
    )
}

export default Form

Form.propTypes = {
  imgOnePath: propTypes.string,
  imgOneAlt: propTypes.string,
  imgTwoPath: propTypes.string,
  imgTwoAlt: propTypes.string,
  inputOneName: propTypes.string,
  inputOneType: propTypes.string,
  inputOnePlaceholder: propTypes.string,
  inputTwoName: propTypes.string,
  inputTwoType: propTypes.string,
  inputTwoPlaceholder: propTypes.string,
  inputThreeName: propTypes.string,
  inputThreeType: propTypes.string,
  inputThreeePlaceholder: propTypes.string,
  calendarOneLabel: propTypes.string,
  calendarOneName: propTypes.string,
  calendarTwoLabel: propTypes.string,
  calendarTwoName: propTypes.string,
  inputFourLabel: propTypes.string,
  inputFourPlaceholder: propTypes.string,
  btnContainer: propTypes.string,
  btnTitle: propTypes.string,
  btnAction: propTypes.func,
  tabletActive: propTypes.bool,
  bottomImgTablet: propTypes.string,
  bottomImgMobile: propTypes.string,
  bottomImgAlt: propTypes.string
}