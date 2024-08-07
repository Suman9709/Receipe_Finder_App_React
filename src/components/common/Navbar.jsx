import React from 'react'
import recipe_logo from '../Recipe.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row p-2 bg-cyan-700 fixed top-0 w-full z-50'>
        <header className='flex flex-row gap-5 justify-center items-center w-full'>
          <div className='w-12 h-12'>
            <img src={recipe_logo} alt="" />
          </div>
          <nav>
            <ul className='flex flex-row gap-5'>
              <li className='text-xl hover:text-white'><Link to="/">Home</Link></li>
              <li className='text-xl hover:text-white'><Link to="/recipe">Recipe</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
}

export default Navbar
