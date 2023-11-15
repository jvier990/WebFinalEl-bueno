
const Button = (props) =>{
    // eslint-disable-next-line react/prop-types
    const { name } = props;
    return(
            <>
            <button className="bg-primary px-5 py-2 text-white">{name}</button>
            </>
    )
}

export default Button;