import React from 'react'

import { useFetch } from '../../hook/useFetch'

import { Category, Product } from '../../Types/Index'

import { Link } from "react-router-dom"

import { BiEdit } from 'react-icons/bi'

import { MdDeleteForever } from 'react-icons/md'

import './Home.css'

const Home = () => {

    const { data: categories } = useFetch<Category[]>('http://localhost:3000/categories')
    const { data: products } = useFetch<Product[]>('http://localhost:3000/products')

    const combinedData = categories?.map((category) => ({
        ...category,
        products: products?.filter((product) => product.categoryId === category.id),
    }));

    return (
        <div className='main-content'>
            <h1>Categorias:</h1>
            {combinedData?.length == 0 ? <p>Carregando...</p> : (
                combinedData?.map(cat => (
                    <div className='categories' key={cat.id}>
                        <h3><Link to={`/categories/${cat.id}`}>{cat.name}</Link>
                        <Link to={`/categories/${cat.id}/edit`}><BiEdit id='edit'/></Link></h3>
                        <ul>
                            {cat.products?.map((product) => (
                                <li key={product.id}>{product.name}</li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
        )
};

export default Home