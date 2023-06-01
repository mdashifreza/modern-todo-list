import React, { useState } from 'react';
import { addtodo, deltodo, edittodo } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

export const TodoList = () => {
    const dispatch = useDispatch();
    const inputData = useSelector((state) => state.AddtodoReducers.list);
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);
    console.log(input,editId)
    const handleAddTodo = () => {
        if (input.trim() !== '') {
            if (editId !== null) {
                dispatch(edittodo(editId, input));
                setEditId(null);
            } else {
                dispatch(addtodo(input));
            }
            setInput('');
        }
    };

    const handleEditTodo = (id, editeddata) => {
        setEditId(id)
        setInput(editeddata)
    }
    const handleDelete = (id) => {
        dispatch(deltodo(id));
    }
    return (
        <div className='flex justify-between mx-20 items-center h-screen'>
            <div>
                <input type="text" placeholder="add task here" className="justify-between placeholder:p-2 border-2 rounded border-gray-500 outline-gray-600 p-2 text-black w-[400px] h-[100px] text-3xl" onChange={(e) => setInput(e.target.value)} value={input} />
                <i className="p-2 bg-white rounded text-black font-extrabold text-2xl ml-2 cursor-pointer" onClick={handleAddTodo}>{editId ? 'Edit-Todo' : 'Add-Todo'}</i>
            </div>
            <div className="dataShow text-white">
                {
                    inputData.map((items) => {
                        return (
                            <div key={items.id} className='flex justify-between border-2 border-gray-300 p-3 rounded my-1 w-[400px] h-[100px]'>
                                <span className='w-[200px]'>{items.data}</span>
                                <div className='border-2 border-gray-400 ml-10'></div>
                                <div className='flex space-x-5'>
                                <button className='bg-white text-black p-2 rounded' onClick={() => handleEditTodo(items.id, items.data)}>Edit</button>
                                <button className='bg-white text-black p-2 rounded' onClick={() => handleDelete(items.id)}>del</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
