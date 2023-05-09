import Card from "./Card";
import { useGetAllProductsQuery } from "../../features/productsApi";

function Cards() {
  const { data: cards } = useGetAllProductsQuery();

  return (
    <div className=" grid grid-cols-3 gap-1 mt-5 mx-2 grid-rows-3">
      {cards?.length
        ? cards.map((card) => (
            <ul key={card.id}>
              <Card
                name={card.name}
                image={card.image}
                category={card.category}
                description={card.description}
                price={card.price}
                cantidad={card.cantidad}
                id={card.id}
              />
            </ul>
          ))
        : console.log({ cards })}
    </div>
  );
}

export default Cards;
