import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl w-full mx-auto px-4'>
                <div className='flex items-center'>
                    <div className='py-1'>
                        <img src={logo} alt="to-do-app" />
                    </div>
                    <div className='py-1 ms-auto'>
                        <Link className='px-2 font-medium' to="/">Home</Link>
                        <Link className='px-2 font-medium' to="/about">About Us</Link>
                        <Link className='px-2 font-medium' to="/task-list">Task List</Link>
                        <Link className='px-2 font-medium' to="/create-task">Create Task</Link>
                        <Link className='px-2 font-medium' to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;