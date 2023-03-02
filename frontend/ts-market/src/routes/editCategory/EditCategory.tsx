import axios from "axios";
import Input from "../../components/form/Input";
import { Category } from "../../Types/Index";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SubmitButton from "../../components/form/SubmitButton";
import "../home/Home.css";


const EditCategory = () => {
    const emptyCategory: Category = { name: "", id: 0 };
    const { id } = useParams();
    const [category, setCategory] = useState<Category>(emptyCategory);
    const nav = useNavigate();

    useEffect(() => {
    axios
        .get(`http://localhost:3000/categories/${id}`)
        .then((response) => setCategory(response.data))
        .catch((error) => console.error(error));
    }, []);

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    axios
        .put(`http://localhost:3000/categories/${id}`, category)
        .then((response) => {
        console.log(response.data);
        setCategory(emptyCategory);
        nav("/");
        })
        .catch((error) => console.error(error));
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCategory({ ...category, [e.target.name]: e.target.value });
        console.log(category);
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    };

    return (
        <div className="main-content" id="form-control">
        <h1>Editando Categoria</h1>
    <form onSubmit={submit}>
        <div>
        <Input
            type="text"
            name="name"
            placeholder="Insira o nome da categoria"
            text="Nome do categoria:"
            handleOnChange={handleChange}
            value={category.name}
        />
        </div>
        <SubmitButton
            text="Atualizar Categoria"
            id="categoryBtn"
            onClick={handleSubmit}
        />
        </form>
    </div>
    )};

export default EditCategory;
