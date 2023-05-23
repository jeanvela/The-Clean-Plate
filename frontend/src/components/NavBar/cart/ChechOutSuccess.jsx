import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotal } from "../../../features/cartSlice";

function ChechOutSuccess() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
    dispatch(getTotal());
  }, [dispatch]);
  return (
    <div>
      <h2>Checkout ChechOutSuccess</h2>
    </div>
  );
}

export default ChechOutSuccess;
