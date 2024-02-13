import { EditIcon, TrashIcon } from '../../assets/Icon';

const InprogressCad = () => {
  return (
    <div className='h-40 w-40 p-2 bg-slate-300 grid grid-cols-1 gap-4 content-between'>
      <div>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>

      <div className=' flex justify-between items-center gap-5'>
        <div>
          <input
            className='h-4 w-4 cursor-pointer'
            type='checkbox'
            name=''
            id=''
          />
        </div>

        <div className=' flex gap-3'>
          <TrashIcon />
          <EditIcon />
        </div>
      </div>
    </div>
  );
};

export default InprogressCad;
