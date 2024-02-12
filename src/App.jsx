function App() {
  return (
    <>
      <header className='bg-green-800 h-[200px]'>
        <div className='text-center py-10 space-y-2'>
          <input type='text' />
          <h1 className=' text-white text-3xl'>Task Manager</h1>

          <div className=' text-center'>
            <button className=' px-8 py-2 rounded-sm font-medium text-white bg-green-400'>
              + Create
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
