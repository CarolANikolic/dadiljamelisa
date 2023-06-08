import styles from './input.module.css';

const Input = (props) => {
    return (
        <div className={styles.inputContainer}>

            {props.generalInput ?
            <div className={styles.inputBlock}>
                <label htmlFor={props.name}>{props.name}</label>
                <input className={styles.inputField} 
                type={props.type} 
                name={props.name} 
                id={props.name}
                placeholder={props.placeholder} 
                required>
                </input>
            </div> : ''}

            {props.messageBox ? 

            <div className={styles.inputBlock}>
                <label htmlFor={props.messageName}>{props.messageName}</label>
                <textarea className={styles.inputField} name={props.messageName} id={props.messageName} placeholder={props.placeholder} rows="4" cols="30"></textarea>
            </div> : ''}
        </div>
    ); 
}

export default Input;