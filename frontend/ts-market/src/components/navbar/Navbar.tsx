import { Link } from "react-router-dom"

import { SiTypescript } from 'react-icons/si'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>
                <Link to={`/`}><SiTypescript className="ts" /> Market</Link>
            </h2>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/categories`} className='new-btn'>Adicionar Categoria</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar