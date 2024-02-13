import { EditIcon, TrashIcon } from '../../assets/Icon';

const InprogressCad = () => {
  return (
    <div className='h-[180px] w-[180px] p-2 border-t-8 rounded-md shadow-md border-blue-300 bg-slate-100 grid grid-cols-1 gap-4 content-between'>
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
