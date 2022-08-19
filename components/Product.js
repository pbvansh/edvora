
const Product = ({id,name,price,stock}) => {
  return (
    <div key={id} className='flex relative bg-white m-5 flex-col rounded-md shadow-lg'>
        <p className="absolute right-0 p-5 text-gray-500 italic text-sm">{id}</p>
        <p className="p-5 font-semibold text-xl">{name}</p>
        <p className="p-2 text-center">{price}</p>
        <p className="btn whitespace-nowrap">${price} - ADD TO CART</p>
    </div>
  )
}

export default Product
