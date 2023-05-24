import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../../features/productsSlice";
import SideBar from "./SideBar";
const ProductsDashboard = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    
  };

  return (
    <div className="grid grid-cols-6">
      <SideBar/>
      <div className="grid space-x-2 grid-cols-3 col-span-5 gap-2 mt-5 mx-2 grid-rows-3">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <p>Product: {product.name}</p>
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsDashboard;
