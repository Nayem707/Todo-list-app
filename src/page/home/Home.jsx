import Card from '../../components/common/ToDoCard';
import InprogressCad from '../../components/common/InprogressCad';
import SideCard from '../../components/common/SideCard';

const Home = () => {
  return (
    <section className='flex justify-between'>
      <div className='mx-auto py-5 space-y-2'>
        <header className='flex w-100 justify-between'>
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
        </header>

        <hr />

        <div className='flex justify-between gap-10'>
          <div className='grid grid-cols-2 gap-4'>
            <Card />
            <Card />
          </div>

          <div className='py-18 w-[2px] h-72 bg-slate-200' />

          <div className='grid grid-cols-2 gap-4'>
            <InprogressCad />
            <InprogressCad />
          </div>
        </div>
      </div>

      <div>
        <SideCard />
      </div>
    </section>
  );
};

export default Home;
