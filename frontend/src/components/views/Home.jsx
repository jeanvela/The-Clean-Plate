// import NavBar from "../NavBar/NavBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* <NavBar/> */}

      <div className="border-t-4 border-gray-200 my-5"></div>
      <div className="max-w-6xl mx-auto">
        <img
          className="mx-auto max-w-full max-h-200 "
          src="https://via.placeholder.com/1280x400.png"
          alt="Sample Image"
        />
      </div>



      <Footer />
    </div>
  );
};

export default Home;
