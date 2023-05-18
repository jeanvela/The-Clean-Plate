import Card from "./Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  filterByCategoryAndOrigin 
} from "../../features/productsSlice";
import { getAllCategories } from "../../features/categorySlice";
import InfiniteScroll from "react-infinite-scroll-component";

function Cards() {
  const dispatch = useDispatch();
  const { allCategories: categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);

  const [itemsToShow, setItemsToShow] = useState(20);
  const [hasMore, setHasMore] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedOrigin, setSelectedOrigin] = useState("All");


  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  const handlerFilterByCategory = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    dispatch(filterByCategoryAndOrigin({ category, origin: selectedOrigin }));
  };
  
  const handlerFilterByOrigin = (e) => {
    const origin = e.target.value;
    setSelectedOrigin(origin);
    dispatch(filterByCategoryAndOrigin({ category: selectedCategory, origin }));
  };
  


  const fetchMoreData = () => {
    setTimeout(() => {
      const additionalItems = products.slice(itemsToShow, itemsToShow + 20);
      setItemsToShow(itemsToShow + additionalItems.length);
      if (itemsToShow >= products.length) {
        setHasMore(false);
      }
    }, 1000);
  };
  

  const displayedProducts = products.slice(0, itemsToShow);


  return (
    <div className="mt-5 mx-2"> 
      <div className="flex justify-between mb-5">
        <select
          className="border border-gray-300 rounded px-2 py-1"
          onChange={handlerFilterByCategory}
        >
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

        <select
          className="border border-gray-300 rounded px-2 py-1"
          onChange={handlerFilterByOrigin}
        >
          <option disabled selected defaultValue>
            Origin
          </option>
          <option value="All">All</option>
          <option value="animal">Animal</option>
          <option value="plant">Plant</option>
        </select>
      </div>

      <div  id="InfiniteScroll">
      <InfiniteScroll
  dataLength={displayedProducts.length}
  next={fetchMoreData}
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
>
  <div className="grid grid-cols-3 gap-1 mt-5 mx-2 grid-rows-3">
    {displayedProducts?.length ? (
      displayedProducts.map((card) => (
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
</InfiniteScroll>

      </div>
    </div>
  );
}

export default Cards;


