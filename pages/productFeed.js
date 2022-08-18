import Navbar from "../components/Navbar"
import axios from 'axios'
import Product from "../components/Product";

const productFeed = ({ product }) => {

  return (
    <div className=" bg-gray-400">
      <Navbar />
      <p className="text-center font-bold text-2xl m-10 bg-black text-white p-3 rounded-md">Product Feed</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          product.map((product) => (
            <Product key={product.id} id={product.product_id} name={product.name} price={product.selling_price} stock={product.stock} />
          ))
        }
      </div>

    </div>
  )
}

export default productFeed

export async function getServerSideProps() {

  const res = await axios('https://assessment.api.vweb.app/products')

  const product = res.data;

  return {
    props: {
      product,
    }
  }
}
