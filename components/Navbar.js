import {useRouter} from 'next/router';

const Navbar = () => {
    const router = useRouter();

  return (
    <div className="bg-black bg-opacity-80 p-3 sm:p-5 flex sticky z-10 top-0">
        <div className="hidden sm:inline-flex sm:mx-2 md:ml-20">
          <img onClick={()=>router.push('/')} src='https://i.ibb.co/0cyr251/Edvora-Private-Limited-India-73401-1643531252-removebg-preview.png'  alt='logo' height={50} width={150} className='cursor-pointer'/>
        </div>
        <div className="flex text-white flex-grow space-x-5 md:space-x-10 justify-end items-center whitespace-nowrap mr-3">
            <p className="NavIteam" onClick={()=>router.push('/userFeed')}>User</p>
            <p className="NavIteam" onClick={()=>router.push('/productFeed')}>Products</p>
            <p className="NavIteam" onClick={()=>router.push('/dashboard')}>Dashboard</p>
            <p className="NavIteam">My Contact</p>
            <span>
                |
            </span>
            <button className="p-2 px-5 font-bold bg-slate-500 rounded-full hover:bg-slate-600">LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar
