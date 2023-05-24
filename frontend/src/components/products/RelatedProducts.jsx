import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../features/productsSlice";
import Card from "./Card";
import { useEffect } from "react";
function RelatedProducts() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="">
      {products?.length ? (
        products.map((card) => (
          <Card
            key={card._id}
            name={card.name}
            image={card.image}
            category={card.category[0]}
            description={card.description}
            price={card.price}
            id={card._id}
          />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default RelatedProducts;
