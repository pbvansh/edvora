import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  )
}
