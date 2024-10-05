import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

function Register(props) {
    const { register } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        register(formData);
    }

    return (
        <div className='flex flex-col gap-5'>
            <h3 className='text-xl font-semibold'>Register</h3>
            <div className='flex flex-col gap-3'>
                <label>Name</label>
                <input type='text' name='name' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-3'>
                <label>Email</label>
                <input type='email' name='email' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-3'>
                <label>Password</label>
                <input type='password' name='password' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} className='bg-slate-900 text-white px-5 py-2 rounded-sm min-w-60 w-auto flex-grow-0'>Register</button>
        </div>
    );
}

export default Register;