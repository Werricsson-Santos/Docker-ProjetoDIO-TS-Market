import './NewProduct.css'
import Input from "../../components/form/Input"
import Select from '../../components/form/Select'
import { Category, Product } from '../../Types/Index'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SubmitButton from '../../components/form/SubmitButton'
import axios from 'axios'


const NewProduct = () => {

    const nav = useNavigate()

    function handleSave() {
        
        nav('/', { state: { message: 'Hello, world!' } });
    }

    const emptyProduct: Product = { name: '', categoryId: 0 , price: 0, description: '', quantity: 0 }
    const [product, setProduct] = useState<Product>(emptyProduct);

    const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);

    useEffect(() => {
    async function fetchCategories() {
        const { data: categories } = await axios.get<Category[]>('http://localhost:3000/categories');
        setCategoryOptions(categories);
        }
        fetchCategories();
    }, []);



    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/products', product)
            .then(response => {
                console.log(response.data);
                setProduct(emptyProduct);
                nav('/');
            })
            .catch(error => console.error(error));
    }
    
    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = parseInt(event.target.value, 10);
        setProduct({ ...product, categoryId });
    }
    
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    

    return (
        <div className="main-content" id="form-control">
            <h1>Insira um produto</h1>
            <form onSubmit={submit}>
            <div>
            <Input type="text" name="name" placeholder="Insira o nome do produto" text="Nome do produto:" handleOnChange={handleChange} />
            </div>
            <div>
            <Input type="number" name="price" placeholder="Insira o preço" text="Preço:" handleOnChange={handleChange} />
            </div>
            <div>
            <Input type="number" name="quantity" placeholder="Insira a quantidade" text="Quantidade:" handleOnChange={handleChange} />
            </div>
            <div>
            <Input type="text'" name="description" placeholder="Insira a descrição" text="Descrição:" handleOnChange={handleChange} />
            </div>
            <div>
            <Select name='categoryId' text='Selecione a categoria:' options={categoryOptions} onChange={handleSelectChange}  />
            </div>
            <SubmitButton text='Adicionar produto' id='productBtn' onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default NewProduct