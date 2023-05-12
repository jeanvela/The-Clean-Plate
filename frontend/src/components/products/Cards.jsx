import Card from "./Card";
// import { useGetAllProductsQuery } from "../../features/productsApi";
import { useEffect } from "react";
import { getAllProducts } from "../../features/productsSlice";
import { useDispatch, useSelector } from "react-redux";
function Cards() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.products);
  // const { data: cards } = useGetAllProductsQuery();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className=" grid grid-cols-3 gap-1 mt-5 mx-2 grid-rows-3">
      {allProducts?.length
        ? allProducts.map((card) => (
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
        : console.log({ allProducts })}
    </div>
  );
}

export default Cards;
