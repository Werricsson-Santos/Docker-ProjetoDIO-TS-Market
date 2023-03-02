import './Select.css'

import { Category } from '../../Types/Index'

type Select = {
    text: string,
    name: string,
    options?: Category[]
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ text, name, options, onChange, value }: Select) => (
    <div id='form-control'>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} value={value} onChange={onChange}>
            <option>Selecione uma opção:</option>
            {options && options.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
    </div>
)

export default Select