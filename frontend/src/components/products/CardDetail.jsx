import { useGetProductDetailQuery } from "../../features/productsApi";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import Slider from "react-slick";

function CardDetail() {
  const { id } = useParams();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { data: detail } = useGetProductDetailQuery(id) || {};

  return (
    <div className="  h-screen w-full flex bg-cover bg-[url('/../bg2.jpg')]  bg-center ">
      <div className="max-w-md mx-auto justify-center  bg-amber-100 rounded-xl  overflow-hidden shadow-lg md:max-w-2xl  hover/edit:translate-x-0.5 hover/edit:bg-amber-200 self-center  ">
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
      <Slider {...settings}>
        <RelatedProducts className=" flex  flex-row justify-center  items-end" />
      </Slider>
    </div>
  );
}

export default CardDetail;
