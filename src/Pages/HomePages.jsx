import React from 'react'
import Background_img from '../Pages/bacground.jpeg'
import { useNavigate } from 'react-router-dom'
const HomePages = () => {
    const navigate = useNavigate();
    const HandleExploreClick = () => {
        navigate('/recipe');

    }
    return (
        <div className="relative">
            <div className='flex mt-16 h-[calc(100vh-4rem)]'>
                <img className='w-full h-full object-cover' src={Background_img} alt="Background" />
            </div>
            <div className="absolute top-[400px] left-12">
                <button
                    type="button"
                    className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-200 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-400"
                    onClick={HandleExploreClick} >
                    Let's Explore
                </button>
            </div>
        </div>
    )
}

export default HomePages
