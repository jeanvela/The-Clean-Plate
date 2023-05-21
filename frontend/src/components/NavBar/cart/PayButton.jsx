import axios from "axios";
// import { useSelector } from "react-redux";

function PayButton({ item }) {
  const handleCheckOut = () => {
    axios
      .post("http://localhost:3001/stripe/create-checkout-session", {
        item,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((error) => console.log(error));
  };
  console.log(item);
  return (
    <div>
      <button onClick={() => handleCheckOut()}>Checkout</button>
    </div>
  );
}

export default PayButton;
