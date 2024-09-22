import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {

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

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const response = await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
        const users = await response.json();
        if (users.length > 0) {
            localStorage.setItem("todoUser", JSON.stringify(users[0]));
            navigate("/task-list")
        } else {
            alert("email/password incorrect");
        }
    }

    return (
        <div className='flex flex-col gap-5'>
            <h3 className='text-xl font-semibold'>Login</h3>
            <div className='flex flex-col gap-3'>
                <label>Email</label>
                <input type='email' name='email' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-3'>
                <label>Password</label>
                <input type='password' name='password' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange} />
            </div>
            <button onClick={handleSubmit} className='bg-slate-900 text-white px-5 py-2 rounded-sm min-w-60 w-auto flex-grow-0'>Login</button>
        </div>
    );
}

export default Login;