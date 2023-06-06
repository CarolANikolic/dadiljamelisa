const Input = (props) => {
    return (
        <>
        <label for={props.name}>{props.name}</label>

        <input 
        type={props.type} 
        name={props.name} 
        placeholder={props.placeholder} 
        required>
        </input>
        </>
    ); 
}

export default Input;