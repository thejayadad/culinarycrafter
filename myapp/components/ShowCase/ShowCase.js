import Link from 'next/link';

const ShowCase = () => {
    const images = [
        'https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2888679/pexels-photo-2888679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8507633/pexels-photo-8507633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      ];

  return (
    <section className='bg-light min-h-[640px] mx-auto px-3 flex items-center py-16'>
      <div className='container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14'>
      <div className='flex flex-col justify-center items-start'>
          <h3 className='opacity-70 tracking-[.25em] text-xl sm:text-[22px] uppercase'>
            Welcome To
          </h3>
          <h1 className='text-2xl sm:text-[38px] tracking-[.04em] font-normal py-3 text-white mb-3'>
            Culinary Crafters
          </h1>
          <p className='opacity-60 font-light font-barlow text-justify text-base sm:text-lg text-white'>
            The place where organic food, amazing chefs, with a little magic makes an amazing experience.
          </p>
          <Link
            href={'/'}
            className='bg-gray-600 font-barlow px-4 min-w-[158px] min-h-[48px] inline-flex items-center justify-center uppercase text-white transition duration-300 ease-in-out hover:bg-lion-dark mt-8 tracking-widest'
          >
            See More
          </Link>
        </div>
        slider
    </div>
    </section>
  )
}

export default ShowCase