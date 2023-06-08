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
        </>
    ); 
}

export default Input;