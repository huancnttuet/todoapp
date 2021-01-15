import './Button.scss'

const Button = (props) => {
    const {type, text, onClick} = props
    if(type === 'X') {
        return (<button className='btn-x' onClick={onClick}>{text}</button>)
    }
    if(type === 'deactive')
    return (
        <button className='btn btn-3' style={{backgroundColor:'white', color:'black'}} onClick={onClick}>{text}</button>
    )
    if(type === 'active')
    return (
        <button className='btn btn-3' style={{backgroundColor:'green'}} onClick={onClick}>{text}</button>
    )
    return (
        <button className='btn btn-3' onClick={onClick}>{text}</button>
    )
}



export default Button