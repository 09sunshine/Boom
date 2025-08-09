import MeetingTypeList from '@/components/MeetingTypeList';


const Home = () => {

  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[250px] w-full rounded-[20px] bg-[url(/images/hero-background.png)] bg-cover'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-5 lg:p-6 sm:p-5'>
              <h2 className='glassmorphism max-w-[270px] p-2 text-center font-normal rounded-lg'>
                Upcoming Meeting at: 12:00 PM
              </h2>
              <div className='flex flex-col gap-1'>
                  <h1 className='text-4xl font-extrabold lg:text-6xl'>{time}</h1>
                  <p className='font-medium text-sky-1'>{date}</p>
              </div>
          </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home
