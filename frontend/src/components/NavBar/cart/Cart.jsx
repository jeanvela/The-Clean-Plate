import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseAmount,
  removeCartItem,
  setCart,
  clearCart,
  getTotal,
} from "../../../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);
  const { cartItem, total, amount } = useSelector((store) => store.cart);

  const handelRemove = (cartItem) => {
    dispatch(removeCartItem(cartItem));
  };
  const handeldecrease = (cartItem) => {
    dispatch(decreaseAmount(cartItem));
  };
  const handleIncrement = (cartItem) => {
    dispatch(setCart(cartItem));
  };
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" px-2  py-4 grid items-center grid-cols-4 grid-cols gap-2">
      <h2 className=" font-normal text-3xl text-center">Shooping Cart</h2>
      {cartItem.length === 0 ? (
        <div className=" text-xl mt-8 flex-col items-center ">
          <p>your cart is empty</p>
          <div className=" ml-4 text-gray-500 flex items-center mt-4">
            <Link to="/categories/products">
              <span className=" ml-2"> Let`s shop</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className=" mt-8 mb-4 grid items-center grid-cols-4 gap-2">
            <h3 className=" text-sm font-normal uppercase">Product</h3>
            <h3 className=" text-sm font-normal uppercase">Price</h3>
            <h3 className=" text-sm font-normal uppercase">Amount</h3>
            <h3 className=" text-sm font-normal uppercase">Total</h3>
          </div>
          <div className=" grid items-center grid-cols-4 gap-2">
            {cartItem?.map((item) => (
              <div key={item.id}>
                <div className=" ">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3 className=" text-sm font-normal uppercase">
                      {item.name}
                    </h3>
                    <p>{item.category}</p>
                    <button onClick={() => handelRemove(item)}>remove</button>
                  </div>
                </div>
                <div>${item.price}</div>
                <div>
                  <button onClick={() => handeldecrease(item)}>-</button>
                  <div>{item.cartAmount}</div>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div>${item.price * item.cartAmount}</div>
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={() => handelClearCart()}
              className=" max-w-full h-9 rounded-md font-normal bg-yellow-900 text-white cursor-pointer"
            >
              Clear cart
            </button>
            <div>
              <div>
                <span>Subtotal</span>
                <span>{cart.total}</span>
              </div>
            </div>
            <p>Free shipping</p>
            <button className=" max-w-full h-9 rounded-md font-normal bg-yellow-900 text-white cursor-pointer">
              Check Out
            </button>
            <div className=" mt-4">
              <Link to="/categories/products">
                <span className=" ml-2 flex items-center"> Keep shopping</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
