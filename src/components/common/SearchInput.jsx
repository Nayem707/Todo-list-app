import { useState } from 'react';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleChange}
        className='border border-gray-300 rounded-full py-1 px-4 pl-10 focus:outline-none focus:border-blue-500'
      />

      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='absolute left-3 top-1 h-6 w-6 text-gray-400'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
      </svg>
    </div>
  );
}

export default SearchInput;
