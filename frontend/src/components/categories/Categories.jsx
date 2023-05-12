import Category from "./Category";

import { useGetCategoriesQuery } from "../../features/productsApi";

function Categories() {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <div className=" grid grid-cols-3 gap-3 mt-5 mx-3 ">
      {categories?.length
        ? categories.map((category) => (
            <div key={category.id}>
              <Category name={category.name} image={category.image} />
            </div>
          ))
        : console.log(categories)}
    </div>
  );
}

export default Categories;
