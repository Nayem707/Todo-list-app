import Card from '../../components/common/ToDoCard';
import InprogressCad from '../../components/common/InprogressCad';
import SideCard from '../../components/common/SideCard';
import DragAndDrop from '../../components/common/DragaAndDrop';

const Home = () => {
  return (
    <section className='flex justify-between '>
      <div className='mx-auto py-5 space-y-2 px-5'>
        <header className='py-2 px-1 rounded-sm border-b sticky top-0 bg-white flex justify-between'>
          <div className='flex gap-5 '>
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

          <div className='flex gap-5'>
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
        </header>

        <DragAndDrop />
      </div>

      {/* Completing Task card */}
      <div className=''>
        <SideCard />
      </div>
    </section>
  );
};

export default Home;
