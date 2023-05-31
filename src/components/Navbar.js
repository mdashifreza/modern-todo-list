import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

export const Navbar = () => {
    const [nav,setNav]= useState(false);
return (
    <div className='flex justify-between items-center h-12 max-w-[1240px] px-4 mx-auto'>
        <h1 className='w-full text-3xl font-bold'>TodoList</h1>
        <div>
            <ul className='hidden md:flex'>
                <li className='p-3'>Home</li>
                <li className='p-3'>about</li>
                <li className='p-3'>Resources</li>
            </ul>
        </div>
        <div onClick={()=>setNav(!nav)} className='block md:hidden'>
            {!nav ? <AiOutlineClose className='text-3xl'/> : <AiOutlineMenu className='text-3xl'/>}
        </div>
        <div className={!nav ? `fixed top-0 left-0 h-full border-2 border-gray-600 bg-gray-400 w-[80%] ease-in-out duration-500 md:hidden` : `fixed left-[-100%]`}>
            <h1 className='w-full text-3xl font-bold m-4'>TodoList</h1>
            <div>
            <ul className='uppercase p-4'>
                <li className='p-3 border-b-2 border-gray-300'>Home</li>
                <li className='p-3 border-b-2 border-gray-300'>about</li>
                <li className='p-3'>Resources</li>
            </ul>
        </div>
        </div>
    </div>
)
}
