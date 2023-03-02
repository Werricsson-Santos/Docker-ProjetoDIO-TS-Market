import Navbar from './components/navbar/Navbar';

import { Outlet } from 'react-router';

import './App.css';
import Footer from './components/footer/Footer';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
