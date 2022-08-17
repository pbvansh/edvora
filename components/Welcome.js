
const Welcome = () => {
  return (
    <div>
      <video  width="90%" height="30%" autoPlay="true" muted loop className='rounded-2xl m-5 flex mx-auto'>
        <source src="https://edvora-public.sgp1.cdn.digitaloceanspaces.com/public-updated/img/FinalHomepageVideo.mp4" type="video/mp4"/>
      </video>
      <div className='absolute top-[30%] lg:top-[50%] left-[8%]'>
      <p className='text-white text-xl md:text-2xl lg:text-4xl xl:text-6xl'>Welcome talented team of Edvora.</p>
      <p className='text-white text-xl md:text-2xl lg:text-4xl xl:text-6xl'>Your smart learning space.</p>
       </div>
    </div>
  )
}

export default Welcome
