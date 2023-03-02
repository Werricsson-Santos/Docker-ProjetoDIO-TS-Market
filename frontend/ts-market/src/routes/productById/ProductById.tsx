import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'
import { useState, useEffect } from 'react'
import { Category, Product } from '../../Types/Index'
import '../home/Home.css'
import './ProductById.css'
import SubmitButton from '../../components/form/SubmitButton'


const ProductById = () => {

    const { id } = useParams()
    const { data: product } = useFetch<Product>(`http://localhost:3000/products/${id}`)
    const cat = product?.categoryId
    const { data: category } = useFetch<Category> (cat ? `http://localhost:3000/categories/${cat}` : null)

    return (
        <div className='main-content'>
            <h1>{product?.name}</h1>
            <Link to={`/products/${product?.id}/edit`}><SubmitButton id='editBtn' text='Editar produto' /></Link>
        <div className='categories'>
            <ul>
                <li id='item'>
                    <strong>Preço:</strong>
                    {product?.price}
                </li>
                <li id='item'>
                    <strong>Quantidade:</strong>
                    {product?.quantity}
                </li>
                <li id='item'>
                    <strong>Categoria:</strong>
                    {category?.name}
                </li>
                { product?.description && (
                    <li id='item'>
                        <strong>Descrição:</strong>
                        {product?.description}
                    </li>
                )}
            </ul>
        </div>

        </div>
    )
}

export default ProductById