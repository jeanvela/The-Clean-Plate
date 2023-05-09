
// import NavBar from "../NavBar/NavBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* <NavBar/> */}

      <div className="h-screen">
      {/* <div className="border-t-4 border-gray-200 my-5"></div> */}
        <div className="max-w-6xl mx-auto">
          <img
            className="max-w-full rounded-md"
            src="https://www.dieteticastomy.com.ar/content/img/productos/cover/general.jpg"
            alt="Sample Image"
          />
        </div>
        <div className="border-t-4 border-gray-200 my-5"></div>
      </div>
      {/* hola */}
      
      <Footer />
    </div>
  );
};

export default Home;

function Home (){
return (
    <>
<h1>The Clean Plata</h1>
    </>
)
}

export default Home;

