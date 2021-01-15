import './Input.scss'

const Input = (props) => {
    const {type, value, onChange, onKeyDown} = props
    return (
        <div className="wrapper">       
            <input className="input ab-textinput" type={type} value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder="Enter todo name here" />
        </div>
    )
}


export default Input