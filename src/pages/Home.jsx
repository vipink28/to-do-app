import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import illustration from '../assets/illustration.png';

function Home(props) {
    return (
        <div className='h-full flex'>
            <div className='w-1/2 bg-slate-900 flex flex-col items-center justify-center'>
                <h1 className='uppercase text-white text-5xl text-center mb-6'>An App to <br />
                    make your life <br />
                    <span className='text-7xl'>Organised</span>
                </h1>

                <img className='max-w-full inline-block' src={illustration} alt="illustration" />
            </div>

            <div className='w-1/2 bg-teal-100 flex flex-col items-center justify-center'>
                <div className='w-full max-w-md bg-white'>
                    <div className='flex'>
                        <Link className='w-1/2 text-center py-3 bg-slate-900 text-white' to="/login">Login</Link>
                        <Link className='w-1/2 text-center py-3' to="/register">Register</Link>
                    </div>
                    <div className='p-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;