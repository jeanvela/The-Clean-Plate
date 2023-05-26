import { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useState } from "react";
import { setEnableProduct, } from "../../features/productsSlice";
import SideBar from "./SideBar";
import axios from "axios";
import Swal from "sweetalert2"
const ProductsDashboard = () => {
  const filteredProducts = useSelector((state) => state.products.enableProducts);
  const [changeStockProducts, setChangeStockProducts] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        const users = response.data;
        const filterProducts = users;
        
        setChangeStockProducts(filterProducts);
        dispatch(setEnableProduct(filterProducts));
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchData();
  }, [dispatch]);


  // const handleDelete = (productId) => {
  //   // dispatch(deleteProduct(productId));

  // };

  const handleDelete = async (id) => {

    try {

      await axios.patch(`http://localhost:3001/products/${id}`, { enable: false });
      const response = await axios.get("http://localhost:3001/products");
      const users = response.data;
      const filterProducts = users
      
      await dispatch(setEnableProduct(filterProducts));

      Swal.fire({
        icon: 'success',
        title: 'Product has been hided',

      })

    } catch (error) {
      console.error(error);
    }
  }

  const handleUnlock = async (id) => {

    try {

      await axios.patch(`http://localhost:3001/products/${id}`, { enable: true });
      const response = await axios.get("http://localhost:3001/products");
      const users = response.data;
      const filterProducts = users

      await dispatch(setEnableProduct(filterProducts));
      
      Swal.fire({
        icon: 'warning',
        title: 'Product has been showed',

      })

    } catch (error) {
      console.error(error);
    }
  }

  const handleStockUpdate = async (id, action) => {
    try {
      const product = filteredProducts.find((p) => p._id === id);
      const updatedStock = action === "increment" ? product.stock + 1 : product.stock - 1;
  
      await axios.patch(`http://localhost:3001/products/${id}`, { stock: updatedStock });
  
      const updatedProducts = filteredProducts.map((p) => {
        if (p._id === id) {
          return { ...p, stock: updatedStock };
        }
        return p;
      });
  
      setChangeStockProducts(updatedProducts);
      dispatch(setEnableProduct(updatedProducts));
    } catch (error) {
      console.error(error);
    }
  };
  
  


  return (
    <div className="grid grid-cols-6">
      <SideBar />
      <div className="grid space-x-2 grid-cols-3 col-span-5 gap-2 mt-5 mx-2 grid-rows-3">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <div key={product.id}>
              <p>Product: {product.name}</p>
              <p>Stock: {product.stock}</p>
              <button onClick={() => handleDelete(product._id)}>Hide Product</button>
              <br />
              <button onClick={() => { handleUnlock(product._id) }}>Show Product</button>
              <br />
              <button onClick={() => handleStockUpdate(product._id, 'increment')}>Add Stock</button>
              <br />
              <button onClick={() => handleStockUpdate(product._id, 'decrement')}>Remove Stock</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsDashboard;
