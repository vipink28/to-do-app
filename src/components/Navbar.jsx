import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import AuthContext from '../auth/AuthContext';

function Navbar(props) {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className='bg-white'>
            <div className='max-w-7xl w-full mx-auto px-4'>
                <div className='flex items-center'>
                    <div className='py-1'>
                        <img src={logo} alt="to-do-app" />
                    </div>
                    <div className='py-1 ms-auto'>
                        {!user ?
                            <>
                                <Link className='px-2 font-medium' to="/">Home</Link>
                                <Link className='px-2 font-medium' to="/about">About Us</Link>
                            </>
                            :
                            <>
                                <Link className='px-2 font-medium' to="/task-list">Task List</Link>
                                <Link className='px-2 font-medium' to="/create-task">Create Task</Link>
                                {user &&
                                    <Link className='px-2 font-medium' to="/profile">{user?.name}</Link>
                                }
                                <button className='px-2 font-medium' onClick={logout}>Logout</button>
                            </>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;