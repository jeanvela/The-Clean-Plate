// import Slider from "react-slick";
// import Card from "./Card";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAllProducts } from "../../features/productsSlice";

// function RelaitedProducts({ item }) {
//   const { products } = useSelector((state) => state.products);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     focusOnSelect: true,
//   };

//   const prod = products?.filter((el) => el.category[0] === item[0]);
//   console.log(prod);
//   console.log("=====", item);

//   return (
//     <div className="">
//       <Slider {...settings}>
//         {prod?.length ? (
//           prod.map((card) => (
//             <Card
//               key={card._id}
//               name={card.name}
//               image={card.image}
//               category={card.category[0]}
//               description={card.description}
//               price={card.price}
//               id={card._id}
//             />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </Slider>
//     </div>
//   );
// }

// export default RelaitedProducts;
