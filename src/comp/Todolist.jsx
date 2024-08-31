import React, { useEffect, useRef, useState } from 'react';
import todo from '../assets/todo_icon.png';
import Todoitem from './Todoitem';

const Todolist = () => {
  const [list, setList] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      done: false,
    };

    setList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const Delete = (id) => {
    setList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* Title */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo} alt='To-Do Icon' />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* Input Box */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Add Your Task'
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600'
        />
        <button
          onClick={add}
          className='border-none rounded-full bg-green-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
        >
          ADD +
        </button>
      </div>

      {/* To-Do List */}
      <div>
        {list.map((item) => (
          <Todoitem
            key={item.id} // Use the unique id as the key
            text={item.text}
            id={item.id}
            done={item.done}
            Delete={Delete}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
