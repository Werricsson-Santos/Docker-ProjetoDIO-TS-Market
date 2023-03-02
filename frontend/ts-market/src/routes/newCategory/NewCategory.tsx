import axios from "axios";
import Input from "../../components/form/Input";
import { Category } from "../../Types/Index";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SubmitButton from "../../components/form/SubmitButton";
import '../home/Home.css';

const NewCategory = () => {

    const emptyCategory: Category = { name: '', id: 0 };
    const [category, setCategory] = useState<Category>(emptyCategory);

    const nav = useNavigate();

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/categories', category)
            .then(response => {
                console.log(response.data);
                setCategory(emptyCategory);
                nav('/', { state: { message: 'Hello, world!' } });
            })
            .catch(error => console.error(error));
    };


    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setCategory({ ...category, [e.target.name]: e.target.value });
        console.log(category);
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    

    return (
        <div className="main-content" id="form-control">
            <h1>Insira um produto</h1>
            <form onSubmit={submit}>
            <div>
            <Input type="text" name="name" placeholder="Insira o nome da categoria" text="Nome do categoria:" handleOnChange={handleChange} />
            </div>
            <SubmitButton text='Adicionar produto' id='categoryBtn' onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default NewCategory;
