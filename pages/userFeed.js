import axios from "axios"
import Image from "next/image"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const userFeed = ({ users }) => {

  return (
    <div className="">
      <Navbar />
      <p className="text-center font-bold text-2xl m-10 bg-black text-white p-3 rounded-md">User Feed</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 mx-5">
        {
          users.map(({ name, user_id }) => (
            <div key={user_id} className='bg-gray-100 group m-5 flex flex-col items-center cursor-pointer rounded-sm shadow-md md:hover:scale-125 transition delay-100 ease-in-out duration-500 md:transform-none'>
              <div className="m-5">
                <Image className="rounded-full m-10 group-hover:animate-pulse" height={100} width={100} src={`https://randomuser.me/api/portraits/men/${user_id}.jpg`} alt='User_Image' />
              </div>
              <p className="m-5 font-bold group-hover:animate-bounce text-red-500">{name}</p>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default userFeed

export async function getServerSideProps() {
  const res = await axios('https://assessment.api.vweb.app/users')
  const users = res.data;
  return {
    props: {
      users
    }
  }
}
