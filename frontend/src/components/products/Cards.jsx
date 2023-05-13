import Card from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByName } from "../../features/productsByNameSilce";
function Cards() {
  const dispatch = useDispatch();
  const { pruduct } = useSelector((state) => state.productName);
  console.log(pruduct, "fhadhfsdgfhsk");
  useEffect(() => {
    const mov = "";
    dispatch(fetchProductByName(mov));
  }, [dispatch]);
  return (
    <div className=" grid grid-cols-3 gap-1 mt-5 mx-2 grid-rows-3">
      {pruduct?.length
        ? pruduct.map((card) => (
            <ul key={card._id}>
              <Card
                name={card.name}
                image={card.image}
                category={card.category}
                description={card.description}
                price={card.price}
                id={card._id}
              />
            </ul>
          ))
        : console.log({ pruduct })}
    </div>
  );
}

export default Cards;
