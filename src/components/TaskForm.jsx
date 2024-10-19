import React, { useContext, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

function TaskForm(props) {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
                userid: user.id,
                modifiedon: Date()
            }
        })
    }

    const { addTask } = useContext(TaskContext);

    const submitAddForm = () => {
        addTask(formData);
    }


    return (
        <div className='p-4'>
            <h3 className='text-white'>Create Task</h3>
            <div className='p-5 bg-white'>
                <div className='flex flex-col gap-3 mb-3'>
                    <label>Title</label>
                    <input type='text' name='title' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-3 mb-3'>
                    <label>Description</label>
                    <textarea name='description' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange}></textarea>
                </div>
                <div className='flex flex-col gap-3 mb-3'>
                    <label>Due Date</label>
                    <input type='datetime-local' name='duedate' className='p-1 border border-gray-200 rounded-sm w-full inline-block' onChange={handleChange} />
                </div>

                <button onClick={submitAddForm} className='bg-slate-900 text-white px-5 py-2 rounded-sm min-w-60 w-auto flex-grow-0'>Create Task</button>
            </div>
        </div>
    );
}

export default TaskForm;