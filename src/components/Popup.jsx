import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskForm from './TaskForm';
function Popup({ setIsPopup, type, data }) {
    const { deleteTask } = useContext(TaskContext);
    const handleClose = () => {
        setIsPopup(false);
    }

    const handleDelete = () => {
        deleteTask(data.id)
    }
    return (
        <div className='fixed w-full h-full left-0 top-0 bg-black bg-opacity-40'>
            <div className='max-w-2xl text-white w-full bg-slate-950 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4'>
                <div className='mb-4 flex justify-end'>
                    <button className='p-2' onClick={handleClose}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className='py-3'>
                    {
                        type === "view" ?
                            <div>
                                <h4>{data.title}</h4>
                                <p>{data.description}</p>
                                <div className='flex items-center'>
                                    <p>Modified On: {data.modifiedon}</p>
                                    <p className='ms-auto'>Due Date: {data.duedate}</p>
                                </div>
                            </div>
                            : type === "edit" ?
                                <div>
                                    <TaskForm isUdpdate={true} data={data} isPopup={true} setIsPopup={setIsPopup} />
                                </div>
                                : <div>
                                    <p>Are you Sure? You want to delete the task.</p>
                                    <div className='flex justify-end mt-4 w-full'>
                                        <button onClick={handleDelete} className='py-2 px-4 bg-red-700 text-white'>Yes</button>
                                        <button onClick={handleClose} className='py-2 px-4 ms-3 bg-yellow-500 text-slate-950'>No</button>
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Popup;