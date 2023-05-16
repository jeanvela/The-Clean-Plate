import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCart } from "../../features/cartSlice";

function Card({ id, name, image, price, description, stock, category }) {
  const { products } = useSelector((state) => state.products);
  const product = { name, price, image, id, category };
  const HandleAddToCart = (product) => {
    dispatch(setCart(product));
  };
  console.log(products);
  const dispatch = useDispatch();
  return (
    <div className="max-w-md mx-auto bg-amber-50 rounded-xl shadow-md overflow-hidden  h-48 hover/edit:translate-x-0.5  hover/edit:bg-stone-50">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            width="200"
            alt="image"
          />
        </div>
        <div className="p-4">
          <div className="uppercase tracking-wide text-sm   text-yellow-900 font-semibold">
            {name}
          </div>

          <p className="block mt-1  text-lg leading-tight font-medium text-black ">
            price:
            {price}$
          </p>

          <p className="mt-1 text-black text-lg ">category: {category}</p>
          <Link to={`/categories/products/${id}`}>
            <button className=" text-white cursor-pointer p-2 flex justify-center rounded-md bg-yellow-900  hover:bg-amber-800  mt-1">
              Detail
            </button>
          </Link>
          <button
            onClick={() => {
              HandleAddToCart(product);
            }}
            className=" text-white cursor-pointer p-2 flex justify-center rounded-md bg-yellow-900  hover:bg-amber-800  mt-1  "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
