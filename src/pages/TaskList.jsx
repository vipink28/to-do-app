import { faEye, faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskList(props) {
    const { allTasks } = useContext(TaskContext);
    return (
        <div className='max-w-7xl px-4 mx-auto'>
            <div className='bg-slate-950 text-white p-6 mt-10'>

                <div className='py-5'>
                    <table className='border-spacing-0 w-full'>
                        <thead>
                            <tr>
                                <td>Sr. No.</td>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Due Date</td>
                                <td>Actions</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                allTasks ?
                                    allTasks.map((task) => (
                                        <tr key={task.id}>
                                            <td>{task.id}</td>
                                            <td>{task.title}</td>
                                            <td>{task.description}</td>
                                            <td>{task.duedate}</td>
                                            <td>
                                                <span class="px-2">
                                                    <FontAwesomeIcon icon={faEye} />
                                                </span>
                                                <span class="px-2">
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </span>
                                                <span class="px-2">
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                    : "No Tasks available"
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}

export default TaskList;