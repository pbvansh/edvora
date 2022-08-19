import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const myContect = () => {
    return (
        <div className="bg-gray-300 whitespace-nowrap">
            <Navbar />
            <p className="text-center font-bold text-2xl m-10 bg-black text-white p-3 rounded-md">My Contect</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-white shadow-lg flex flex-col relative space-y-20 w-[250px] items-center justify-center rounded-md mx-auto m-10">
                    <div className="bg-black rounded-full w-20 h-20 m-5 absolute -top-10 shadow-lg">
                        <a href="https://github.com/pbvansh" className="">
                            <svg
                                className="w-20 h-20 text-white fill-current cursor-pointer p-2 hover:text-gray-400"
                                fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" /></svg>
                        </a>

                    </div>
                    <p className="p-3 font-bold text-[20px]">My GitHub Profile</p>
                </div>
                <div className="bg-white shadow-lg flex flex-col relative space-y-20 w-[250px] items-center justify-center rounded-md mx-auto m-10">
                    <div className="bg-blue-500 hover:bg-blue-800 rounded-full w-20 h-20 whitespace-nowrap m-5 absolute -top-10 shadow-lg">
                        <a href="https://www.linkedin.com/in/pratik-vansh-955b74232/">
                            <svg
                                className="w-20 h-20 text-white fill-current cursor-pointer p-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <p className="p-3 font-bold text-[20px]">My LinkedIn Profile</p>
                </div>
                <div className="bg-white shadow-lg flex flex-col relative space-y-20 w-[250px] items-center justify-center rounded-md mx-auto m-10">
                    <div className="bg-white hover:bg-blue-100 rounded-full w-20 h-20 whitespace-nowrap m-5 absolute -top-10 shadow-lg">
                        <a href="https://docs.google.com/document/d/1iewNeRUUIoeTg2ZCxIWVbcAS35DHfkyzF_QfltEdvl4/edit?usp=sharing">
                            <svg
                                className="h-20 w-20"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M17 6L31 6 45 30 31 30z" /><path fill="#1976D2" d="M9.875 42L16.938 30 45 30 38 42z" /><path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z" /></svg>
                        </a>
                    </div>
                    <p className="p-3 font-bold text-[20px]">My Resume</p>
                </div>
            </div>

            <div className="m-0 md:mt-36">
                <Footer />
            </div>
        </div>
    )
}

export default myContect
