import { useParams } from 'react-router-dom'
import './Input.css'

interface InputProps {
    type: string, 
    text: string, 
    name: string, 
    placeholder: string,
    handleOnChange: React.ChangeEventHandler<HTMLInputElement>,
    value?: string | number
}

const Input = ({type, text, name, placeholder, handleOnChange, value}: InputProps) => {
    return (
        <div id='form-control'>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    )
}

export default Input