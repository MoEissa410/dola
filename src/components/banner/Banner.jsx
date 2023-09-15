import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const slides = [
  "https://images-eu.ssl-images-amazon.com/images/G/42/consumables/COOP23/Beyti-750x300-Sep23.png",
  "https://m.media-amazon.com/images/G/42/consumables/stores22/Supermarket/1461724_EG_L2_3Col_CN_Snacks_750x300_AR_53658d39-fc17-4b96-a03f-d91e9ecefd8a._CB607327748_.jpg",
  "https://m.media-amazon.com/images/I/61fpwAF0LZL._AC_UF894,1000_QL80_.jpg",
  "https://media.licdn.com/dms/image/C5612AQHFxQ4qZXBITg/article-cover_image-shrink_720_1280/0/1520159011433?e=2147483647&v=beta&t=FZK61ToleRC1Od7-k7sAznK3ZnEbToiXOH03DS6Pb1A",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  //
  useEffect(() => {
    setTimeout(() => {
      current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1);
      current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }, 5000);
  }, [current]);

  const previousSlide = () =>
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1);

  const nextSlide = () => {
    current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  return (
    <div className=" w-full h-auto overflow-x-hidden">
      <div
        className={`w-[400vw] h-[600px] flex transition ease-out duration-700	 z-10`}
        style={{
          transform: `translateX(-${current * 100}vw)`,
        }}
      >
        {slides.map((s) => {
          return (
            <img
              alt="img"
              src={s}
              className="w-screen h-full object-cover"
              key={current}
            />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl z-20">
        <button
          onClick={previousSlide}
          className=" bg-gray-500 opacity-50 hover:bg-gray-500 hover:opacity-90  rounded-full p-2"
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className=" bg-gray-500 opacity-50 hover:bg-gray-500 hover:opacity-90 rounded-full p-2"
        >
          <AiOutlineArrowRight />
        </button>
      </div>

      <div className="relative bottom-8 py-4 flex justify-center gap-3 w-full z-20">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-[22px] h-[3px] cursor-pointer  ${
                i === current ? "bg-yellow-300	" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
