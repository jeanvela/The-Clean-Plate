import Card from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  filterByCategory,
  filterByOrigin,
} from "../../features/productsSlice";

import { getAllCategories } from "../../features/categorySlice";
function Cards() {
  const dispatch = useDispatch();
  const { allCategories: categories } = useSelector(
    (state) => state.categories
  );

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  const handlerFilterByCategory = (e) => {
    e.preventDefault();
    dispatch(filterByCategory(e.target.value));
  };

  const handlerFilterByOrigin = (e) => {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
  };

  return (
    <div className=" grid grid-cols-3 gap-1 mt-5 mx-2 grid-rows-3">
      <select onChange={handlerFilterByCategory}>
        <option disabled selected defaultValue>
          Categories
        </option>
        <option value="All">All</option>
        {categories?.map((el) => (
          <option value={el.name} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>

      <select onChange={handlerFilterByOrigin}>
        <option disabled selected defaultValue>
          Origin
        </option>
        <option value="All">All</option>
        <option value="animal">Animal</option>
        <option value="plant">Plant</option>
      </select>
      {products?.length
        ? products.map((card) => (
            <ul key={card._id}>
              <Card
                name={card.name}
                image={card.image}
                category={card.category[0]}
                description={card.description}
                price={card.price}
                id={card._id}
              />
            </ul>
          ))
        : console.log({ products })}
    </div>
  );
}

export default Cards;
