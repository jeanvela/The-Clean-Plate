import { useGetProductDetailQuery } from "../../features/productsApi";
import { useParams } from "react-router-dom";

function CardDetail() {
  const { id } = useParams();

  const { data: detail } = useGetProductDetailQuery(id) || {};

  return (
    <div className="">
      <div className="max-w-md mx-auto bg-amber-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl  h-full hover/edit:translate-x-0.5 hover/edit:bg-stone-50 mt-12 mb-6  ">
        {detail ? (
          <div className="md:flex">
            <img
              src={detail.image}
              alt="image"
              className=" h-full w-full md:h-96
               mr-3 md:w-56 object-fill"
            />
            <ul className=" my-4 text-lg leading-relaxed ">
              <li className=" ">
                <h1 className=" font-semibold  text-yellow-900 "> product:</h1>
                <p>{detail.name}</p>
              </li>
              <li>
                <h3 className=" font-semibold text-yellow-900 ">category:</h3>
                <p> {detail.category}</p>{" "}
              </li>
              <li>
                <h3 className=" font-semibold text-yellow-900">description:</h3>
                <p>{detail.description}</p>
              </li>
            </ul>
          </div>
        ) : (
          console.log(detail)
        )}
      </div>
    </div>
  );
}

export default CardDetail;
