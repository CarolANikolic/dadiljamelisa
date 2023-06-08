const Input = (props) => {
    return (
        <>
        <label htmlFor={props.name}>{props.name}</label>

        <input 
        type={props.type} 
        name={props.name} 
        id={props.name}
        placeholder={props.placeholder} 
        required>
        </input>

        {props.messageBox ? 

        <div>
            <label htmlFor={props.messageName}>{props.messageName}</label>
            <textarea name={props.messageName} id={props.messageName} placeholder={props.placeholder} rows="4" cols="45"></textarea>
        </div> : ''}
        </>
    ); 
}

export default Input;