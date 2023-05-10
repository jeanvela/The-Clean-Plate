import Footer from "../views/Footer";

const FormProdutcs = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}

      <section className="flex items-center justify-center flex-col h-screen">
        <form>
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
            />
          </div>

          <div className="relative flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
              Price:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="Number"
              name="price"
              placeholder="Price..."
            
            />
            <div className="absolute inset-y-10 right-0 flex items-center pr-4">
              <span className="text-gray-500">$</span>
            </div>
          </div>
          <div className="relative flex flex-wrap -mx-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
            Categories:
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              
              name="categories"
            
            >
            <option>
                opcion 1
            </option>
            <option>
                opcion 2
            </option>
            <div className="absolute inset-y-10 right-0 flex items-center pr-4">
              <span className="text-gray-500">$</span>
            </div>
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
            />
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
            />
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
      <Footer />
    </div>
  );
};

export default FormProdutcs;
