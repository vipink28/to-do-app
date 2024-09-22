import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(props) {
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
        // fetch()
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, { method: "GET" });
        const users = await checkUser.json();
        if (users.length > 0) {
            alert("user already exist, please login");
        } else {
            const response = await fetch("http://localhost:5000/users", config);
            if (response.status === 201) {
                const user = await response.json();
                localStorage.setItem("todoUser", JSON.stringify(user));
                navigate("/task-list");
            } else {
                alert("Something went wrong");
            }
        }
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