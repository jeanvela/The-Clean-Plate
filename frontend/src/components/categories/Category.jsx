import { Link } from "react-router-dom";

function Category({ name, image, id }) {
  return (
    <div className="  rounded-lg relative  ">
      <Link to={`/categories/${name.toLowerCase()}`}>
        <img
          src={image}
          alt="image"
          className="object-cover h-40 w-full rounded-lg absolute mix-blend-overlay  opacity-75"
        />
        <h1 className=" text-4xl p-16  text-center font-bold text-black ">
          {" "}
          {name}{" "}
        </h1>
      </Link>
    </div>
  );
}

export default Category;
