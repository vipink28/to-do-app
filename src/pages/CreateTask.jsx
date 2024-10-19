import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../helper';

function CreateTask(props) {
    const { latestTask, recentTasks } = useContext(TaskContext);
    return (
        <div className='h-full flex'>
            <div className='w-1/2 bg-slate-900 flex flex-col items-center justify-center'>
                <div className='w-1/2'>
                    <TaskForm />
                </div>
            </div>

            <div className='w-1/2 bg-teal-100 flex flex-col items-center justify-center'>
                <div className='w-full max-w-md bg-slate-950 text-white p-5'>
                    <div className='flex items-center'>
                        <h3>Latest Task</h3>
                        <button className='bg-indigo-600 text-white ms-auto px-5 py-2 rounded-sm w-auto flex-grow-0'>Edit</button>
                    </div>
                    <div className='py-5'>
                        <h2>{latestTask?.title}</h2>
                        <p>{latestTask?.description}</p>
                    </div>
                    <div className='flex'>
                        <p>Modified On: {formatDate(latestTask?.modifiedon)}</p>
                        <p>Due Date: {latestTask?.duedate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;