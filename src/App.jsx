import { EditIcon, TrashIcon } from './assets/Icon';

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

      <main className='flex justify-between'>
        <section className='mx-auto py-5 space-y-2'>
          <div className='flex w-100 justify-between'>
            <div className=' flex gap-5 '>
              <div>
                <button className=' font-medium bg-slate-200 px-4 rounded-sm py-1'>
                  + New
                </button>
              </div>

              <div className=' flex gap-3 items-center'>
                <p className='flex items-center gap-1 bg-red-300 font-medium px-4 rounded-sm py-1'>
                  <div className='h-2 w-2 rounded-full bg-red-600' />
                  To Do
                </p>
                <p className='font-medium'>5</p>
              </div>
            </div>

            <div className=' flex gap-5 px-32'>
              <div>
                <button className=' font-medium bg-slate-200 px-4 rounded-sm py-1'>
                  + New
                </button>
              </div>

              <div className=' flex gap-3 items-center'>
                <p className='flex items-center gap-1 bg-blue-300 font-medium px-4 rounded-sm py-1'>
                  <div className='h-2 w-2 rounded-full bg-blue-600' />
                  Runing
                </p>
                <p className='font-medium'>5</p>
              </div>
            </div>
          </div>

          <hr />

          <div className='flex justify-between gap-10'>
            <div className='grid grid-cols-2 gap-4'>
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

              <div className='h-40 w-40 bg-slate-300'>card</div>
              <div className='h-40 w-40 bg-slate-300'>card</div>
              <div className='h-40 w-40 bg-slate-300'>card</div>
            </div>

            <div className='py-18 w-[2px] h-72 bg-slate-200' />

            <div className='grid grid-cols-2 gap-4'>
              <div className='h-40 w-40 bg-slate-300'>card</div>
              <div className='h-40 w-40 bg-slate-300'>card</div>
              <div className='h-40 w-40 bg-slate-300'>card</div>
              <div className='h-40 w-40 bg-slate-300'>card</div>
            </div>
          </div>
        </section>

        <section className=' bg-slate-200 w-[350px] h-[70vh]'>
          <div className='py-5 px-5'>
            <h1 className=' text-lg font-medium text-green-700'>
              Completed Task!
            </h1>
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
      </main>
    </>
  );
}

export default App;
