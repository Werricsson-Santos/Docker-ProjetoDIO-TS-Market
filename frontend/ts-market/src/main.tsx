import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//pages
import Home from './routes/home/Home'
import Categories from './routes/categoryById/Category'

import './index.css'
import NewCategory from './routes/newCategory/NewCategory'
import NewProduct from './routes/newProduct/NewProduct'
import EditCategory from './routes/editCategory/EditCategory'
import ProductById from './routes/productById/ProductById'
import EditProduct from './routes/editProduct/EditProduct'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categories',
        element: <NewCategory />
      },
      {
        path: '/categories/:id',
        element: <Categories />
      },
      {
        path: '/categories/:id/edit',
        element: <EditCategory />
      },
      {
        path: '/products',
        element: <NewProduct />
      },
      {
        path: '/products/:id',
        element: <ProductById />
      },
      {
        path: '/products/:id/edit',
        element: <EditProduct />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
