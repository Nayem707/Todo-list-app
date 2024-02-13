import { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-gray-200 flex justify-center items-center h-screen'>
      <button
        onClick={openModal}
        className=' px-8 py-2 rounded-sm font-medium text-white bg-green-400'
      >
        + Create
      </button>

      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-8 rounded shadow-lg w-1/2'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>Modal Title</h2>
              <button
                className='text-gray-600 hover:text-gray-800 focus:outline-none'
                onClick={closeModal}
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
            <p className='text-gray-700 mt-4'>Modal Content Goes Here</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
