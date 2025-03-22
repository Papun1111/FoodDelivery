import React from "react";
import Slider from "react-slick";
import { FaUtensils, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { menu_list } from "../../assets/assets";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight className="text-red-600 hover:text-red-500 transition duration-300" size={24} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft className="text-red-600 hover:text-red-500 transition duration-300" size={24} />
    </div>
  );
};

const ExploreMenu = ({ category, setCategory }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="explore-menu" className="bg-white py-10 px-4 md:px-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex justify-center items-center gap-2">
          <FaUtensils className="text-red-500" />
          Explore
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Ready to explore a world of flavors? Browse our extensive menu filled with culinary delights from around the globe. Whether you're craving the comfort of classic dishes or adventurous enough to try exotic new flavors, our menu has something to satisfy every palate. Click below to start your delicious journey!
        </p>
      </div>
      <Slider {...settings}>
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div key={index} className="px-3">
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className={`cursor-pointer transform transition duration-300 hover:scale-105 p-4 bg-gray-50 shadow-md rounded-lg flex flex-col items-center ${
                  isActive ? "border-2 border-red-500" : "border-2 border-transparent"
                }`}
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className={`w-24 h-24 object-cover rounded-full mb-2 transition duration-300 ${
                    isActive ? "ring-4 ring-red-300" : "ring-0"
                  }`}
                />
                <p className="text-gray-700 font-medium">{item.menu_name}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ExploreMenu;
