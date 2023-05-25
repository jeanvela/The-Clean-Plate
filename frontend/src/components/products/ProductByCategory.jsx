import { useParams } from "react-router-dom";
import { useGetProductCategoryQuery } from "../../features/productsApi";
import Card from "./Card";

function ProductByCategory() {
  const { id } = useParams();
  const { data: element } = useGetProductCategoryQuery() || {};
  const fil = element?.filter((el) => el.category[0].toLowerCase() == id);

  return (
    <div className=" grid grid-cols-3 gap-1 mt-5 mx-2 grid-rows-3">
      {fil?.length
        ? fil.map((cat) => (
            <ul key={cat._id}>
              <Card
                name={cat.name}
                image={cat.image}
                category={cat.category[0]}
                description={cat.description}
                price={cat.price}
                id={cat._id}
              />
            </ul>
          ))
        : console.log("nada")}
    </div>
  );
}

export default ProductByCategory;
