import './SubmitButton.css'

interface SubmitButton {
    text: string,
    id?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SubmitButton = ({ text, id, onClick }: SubmitButton) => (
        <button className='btn' id={ id } onClick={onClick}>{text}</button>
)

export default SubmitButton