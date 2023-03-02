import '../newProduct/NewProduct.css'
import Input from "../../components/form/Input"
import Select from '../../components/form/Select'
import { Category, Product } from '../../Types/Index'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SubmitButton from '../../components/form/SubmitButton'
import { useFetch } from '../../hook/useFetch'
import axios from 'axios'


const EditProduct = () => {

    const nav = useNavigate()
    const { id } = useParams()

    const [product, setProduct] = useState<Product>({ name: '', categoryId: 0 , price: 0, description: '', quantity: 0 });

    const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);

    const { data: existingProduct } = useFetch<Product>(`http://localhost:3000/products/${id}`);

    useEffect(() => {
        async function fetchCategories() {
            const { data: categories } = await axios.get<Category[]>('http://localhost:3000/categories');
            setCategoryOptions(categories);
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        if (existingProduct) {
            setProduct({
                name: existingProduct.name,
                categoryId: existingProduct.categoryId,
                price: existingProduct.price,
                description: existingProduct.description,
                quantity: existingProduct.quantity
            });
        }
    }, [existingProduct]);

    const handleSave = () => {
        nav('/', { state: { message: 'Hello, world!' } });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = parseInt(event.target.value, 10);
        setProduct({ ...product, categoryId });
    }
    
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/products/${id}`, product)
            .then(response => {
                console.log(response.data);
                setProduct({ name: '', categoryId: 0 , price: 0, description: '', quantity: 0 });
                nav('/');
            })
            .catch(error => console.error(error));
    }
    
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    

    return (
        <div className="main-content" id="form-control">
            <h1>{existingProduct ? 'Editar produto' : 'Inserir produto'}</h1>
            <form onSubmit={submit}>
            <div>
            <Input type="text" name="name" placeholder="Insira o nome do produto" text="Nome do produto:" handleOnChange={handleChange} value={product.name} />
            </div>
            <div>
            <Input type="number" name="price" placeholder="Insira o preço" text="Preço:" handleOnChange={handleChange} value={product.price} />
            </div>
            <div>
            <Input type="number" name="quantity" placeholder="Insira a quantidade" text="Quantidade:" handleOnChange={handleChange} value={product.quantity} />
            </div>
            <div>
            <Input type="text'" name="description" placeholder="Insira a descrição" text="Descrição:" handleOnChange={handleChange} value={product.description} />
            </div>
            <div>
            <Select name='categoryId' text='Selecione a categoria:' options={categoryOptions} onChange={handleSelectChange} value={product.categoryId} />
            </div>
            <SubmitButton text='Adicionar produto' id='productBtn' onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default EditProduct