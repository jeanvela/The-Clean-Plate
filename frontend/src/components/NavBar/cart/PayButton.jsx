import axios from "axios";
import { useSelector } from "react-redux";

function PayButton({ item }) {
  const user = useSelector((state) => state.user);

  const handleCheckOut = () => {
    axios
      .post("http://localhost:3001/stripe/stripe/create-checkout-session", {
        item,
        userId: user,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
        console.log(user);
      })

      .catch((error) => console.log(error));
  };
  return (
    <div>
      <button
        className=" max-w-full w-32 h-10 rounded-md font-normal bg-yellow-900 text-white cursor-pointer"
        onClick={() => handleCheckOut()}
      >
        Checkout
      </button>
    </div>
  );
}

export default PayButton;
