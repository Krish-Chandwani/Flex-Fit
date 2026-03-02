import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'


const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  const imgSrc =
    Array.isArray(image) && image.length > 0
      ? image[0]
      : ""

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        {imgSrc ? (
          <img
            className="hover:scale-110 transition ease-in-out"
            src={imgSrc}
            alt={name}
          />
        ) : (
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}{price}
      </p>
    </Link>
  )
}

export default ProductItem