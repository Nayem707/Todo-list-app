import SearchInput from '../common/SearchInput';

const NavStyle = () => {
  return (
    <header className='bg-green-800 flex justify-center items-center'>
      <div className=' text-center py-5 space-y-2'>
        <SearchInput />
        <h1 className=' text-white text-3xl'>Task Manager</h1>

        <div className=' text-center'>
          <button className=' px-8 py-2 rounded-sm font-medium text-white bg-green-400'>
            + Create
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavStyle;
