import axios from 'axios'
import React, { MouseEventHandler } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SubmitButton from '../../components/form/SubmitButton'
import { useFetch } from '../../hook/useFetch'
import { Category, Product } from '../../Types/Index'
import '../home/Home.css'
import './Category.css'

const Categories = () => {
    const { id } = useParams()
    const nav = useNavigate()

    const { data: category } = useFetch<Category>(`http://localhost:3000/categories/${id}`)
    const { data: products } = useFetch<Product[]>('http://localhost:3000/products')

    const filterData = products?.filter((products) => (
            products.categoryId === category?.id),
    );

    

    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(response => {
                console.log(response.data);
                nav('/');
            })
            .catch(error => console.error(error));
    }

    const handleDeleteClick = (item: Product) => {
        if (typeof item.id !== 'number') {
            throw new Error('O id do item é inválido');
        } else {
            handleDelete(item.id);
        }
    }


    return (
        <div className='main-content'>
                <h1 key={category?.id}>{category?.name}</h1>
                <Link to={'/products'}><SubmitButton id='addBtn' text='Adicionar produto' /></Link>
                {filterData?.map(item => (
                    <div className='categories' key={item.id}>
                        <h3><Link to={`/products/${item.id}`}>{item.name}</Link></h3>
                        <ul>
                            <li>
                                <strong>Preço:</strong>
                                {item.price}
                            </li>
                            <li>
                                <strong>Quantidade:</strong>
                                {item.quantity}
                            </li>
                            {item.description && (
                            <li>
                                <strong>Descrição:</strong>
                                {item.description}
                            </li>
                            )}
                        </ul>
                        <MdDeleteForever
                        id='delete'
                        onClick={() => handleDeleteClick(item)}
                        />
                    </div>
                ))}
        </div>
    )
}

export default Categories