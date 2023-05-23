const Heading = (props) => {
    <>
        <h1 className={props.headingStyle}>{props.title}</h1>
    </>

    return <h1>{props.title}</h1>
}

export default Heading;