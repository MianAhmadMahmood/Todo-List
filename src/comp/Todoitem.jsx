import React from 'react';
import tick from '../assets/tick.png';
import nottick from '../assets/not_tick.png';
import del from '../assets/delete.png';

const Todoitem = ({ text, id, done, Delete, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div
        onClick={() => toggle(id)}
        className='flex flex-1 items-center cursor-pointer'
      >
        <img src={done ? tick : nottick} alt='Status Icon' className='w-7' />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            done ? 'line-through' : ''
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => Delete(id)}
        src={del}
        alt='Delete Icon'
        className='w-3.5 cursor-pointer'
      />
    </div>
  );
};

export default Todoitem;
