import React from 'react';
import { TrashIcon } from '../../assets/Icon';

const SideCard = () => {
  return (
    <section className=' bg-slate-200 w-[350px] h-[70vh]'>
      <div className='py-5 px-5'>
        <h1 className=' text-lg font-medium text-green-700'>Completed Task!</h1>
      </div>

      <div className='grid gap-2 px-5 py-2'>
        <div className='flex items-center justify-between px-3 h-10 rounded-md bg-green-200'>
          <input type='checkbox' name='' id='' />
          <p>Lorem ipsum dolor sit amet...</p>
          <TrashIcon />
        </div>

        <div className='flex items-center justify-between px-3 h-10 rounded-md bg-green-200'>
          <input type='checkbox' name='' id='' />
          <p>Lorem ipsum dolor sit amet...</p>
          <TrashIcon />
        </div>
        <div className='flex items-center justify-between px-3 h-10 rounded-md bg-green-200'>
          <input type='checkbox' name='' id='' />
          <p>Lorem ipsum dolor sit amet...</p>
          <TrashIcon />
        </div>
      </div>
    </section>
  );
};

export default SideCard;
