import FeaturedCategories from "./FeaturedCategories";
import Publications from "../Publications/Publications";

const Home = () => {
  return (
    <div className="  w-full h-full bg-amber-50">
      <div className="">
        {/* <div className="border-t-4 border-gray-200 my-5"></div> */}
        <div className="w-full mx-auto ">
          <img
            className="w-full h-72 mt-1  object-cover object-center  "
            src="/banner.jpg"
            alt="Sample Image"
          />
        </div>
        <div className=" flex flex-col mt-1 py-10 bg-opacity-20 bg-cover bg-[url('/../oats.jpg')]  bg-center h-">
          <h1 className=" text-8xl justify-start ml-2 font-bold text-yellow-900 ">
            The Clean Plate
          </h1>
          <h3 className=" justify-center items-center self-center  text-6xl mt-4 font-semibold text-yellow-900">
            Eat well, live better.
          </h3>
        </div>
        <div>
          <FeaturedCategories />
        </div>
        <div className="border-t-4 border-gray-200 my-5"></div>

        <Publications />
      </div>
    </div>
  );
};

export default Home;
