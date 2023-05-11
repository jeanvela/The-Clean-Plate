import { useState, useEffect } from "react";
import { useGetCategoriesQuery } from "../../features/productsApi";
import axios from "axios";
import {validate} from "./validations";

const CreateProduct = () => {
  const categoriesForm = useGetCategoriesQuery();
  const [create, setCreate] = useState(false);
  const initialState = {
    name: "",
    price: "",
    //categories: [],
    description: "",
    stock: "",
    imageURL: "",
  };

  const [errors, setErrors] = useState({ form: "complete form" });
  const [completed, setCompleted] = useState(initialState);

  const finalForm = {
    name: completed.name,
    price: completed.price,
    //categories: completed.categories.map((item) => item.id),
    description: completed.description,
    stock: completed.stock,
    imageURL: completed.imageURL,
  };

  useEffect(() => {}, [categoriesForm.data]);



  const handleChange = (e) => {
    setCompleted({ ...completed, [e.target.name]: e.target.value });
    setErrors(validate({
      ...completed,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(completed);
    if (Object.keys(validationErrors).length === 0) {
      axios.post("/products", finalForm);
      setCreate(!create);
      setCompleted(initialState);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <section className="flex items-center justify-center flex-col h-screen">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Product name..."
              value={completed.name}
              onChange={handleChange}
            />
            {errors.name ? <label>{errors.name}</label> : null}
          </div>

          <div className="relative flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Price:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="Number"
              name="price"
              placeholder="Product price..."
              value={completed.price}
              onChange={handleChange}
            />
            {errors.price ? <label>{errors.price}</label> : null}
          </div>
          <div className="relative flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Categories:
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="categories"
            >
              <option>opcion 1</option>
              <option>opcion 2</option>
            </select>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              name="description"
              placeholder="Description..."
              value={completed.description}
              onChange={handleChange}
            />
            {errors.description ? <label>{errors.description}</label> : null}
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Stock:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Stock..."
              type="number"
              id="stock"
              name="stock"
              value={completed.stock}
              onChange={handleChange}
            />
            {errors.stock ? <label>{errors.stock}</label> : null}
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Url..."
              type="text"
              id="imageURL"
              name="imageURL"
              value={completed.imageURL}
              onChange={handleChange}
            />
            {errors.imageURL ? <label>{errors.imageURL}</label> : null}
          </div>

          <div className="flex items-center justify-center">
            <div>
              <button
                className="shadow bg-slate-500 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateProduct;
