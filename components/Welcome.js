
const Welcome = () => {
  return (
    <div>
      <video  width="90%" height="30%" autoPlay={true} muted loop className='rounded-2xl m-5 flex mx-auto'>
        <source src="https://edvora-public.sgp1.cdn.digitaloceanspaces.com/public-updated/img/FinalHomepageVideo.mp4" type="video/mp4"/>
      </video>
      {/* <iframe auto width="1920" height="929" src="https://www.youtube.com/embed/RVPKnHtYU6Q" title="ElementsBackground" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <div className='absolute top-[30%] lg:top-[50%] left-[8%]'>
      <p className='text-white text-xl md:text-2xl lg:text-4xl xl:text-6xl'>Welcome talented team of Edvora.</p>
      <p className='text-white text-xl md:text-2xl lg:text-4xl xl:text-6xl'>Here you can see my task</p>
       </div>
    </div>
  )
}

export default Welcome
