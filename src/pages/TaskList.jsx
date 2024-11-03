import { faEye, faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useReducer, useState } from 'react';
import Popup from '../components/Popup';
import TaskContext from '../context/TaskContext';

const reducer = (state, action) => {
    switch (action.type) {
        case "VIEW": return { type: "view", data: action.payload };
        case "EDIT": return { type: "edit", data: action.payload };
        case "DELETE": return { type: "delete", data: action.payload };
        default: return state;
    }
}

function TaskList(props) {
    const { allTasks } = useContext(TaskContext);
    const [isPopup, setIsPopup] = useState(false);

    const [state, dispatch] = useReducer(reducer, null);

    const handlePopup = (type, data) => {
        setIsPopup(true);
        dispatch({ type: type, payload: data })
    }
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
                                                <button className="px-2" onClick={() => { handlePopup("VIEW", task) }}>
                                                    <FontAwesomeIcon icon={faEye} />
                                                </button>
                                                <button className="px-2" onClick={() => { handlePopup("EDIT", task) }}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </button>
                                                <button className="px-2" onClick={() => { handlePopup("DELETE", task) }}>
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    : "No Tasks available"
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {
                isPopup &&
                <Popup setIsPopup={setIsPopup} type={state.type} data={state.data} />
            }
        </div>
    );
}

export default TaskList;