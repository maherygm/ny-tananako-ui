import React, { useState } from "react";
import Slider from "react-slick";
import { STOPDATA } from "../../../../../utils/constants/StopData";
function SlideChangeHooks() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: (current, next) => { setOldSlide(current); setActiveSlide(next); },
    afterChange: current => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container mb-6">
      {/* <h2>beforeChange and afterChange hooks</h2>
      <p>BeforeChange {"=>"} oldSlide: <strong>{oldSlide}</strong></p>
      <p>BeforeChange {"=>"} activeSlide: <strong>{activeSlide}</strong></p>
      <p>AfterChange {"=>"} activeSlide: <strong>{activeSlide2}</strong></p> */}
      <Slider {...settings}>
        {STOPDATA.map((el, index) => (
          <div className="outline-none rounded-3xl  overflow-hidden px-4 " key={index}>
            <div className="bg-white rounded-3xl ">
              <img className="w-full  h-40  rounded-3xl" src={el.imageUrl} alt={el.name} />
              <div className="text-center pb-2">
                <h3 className="font-bold text-white">{el.name}</h3>
                <p className="text-gray-400">{el.type}</p>
                <p className="text-gray-400">Lat: {el.coordinates.lat}, Lng: {el.coordinates.lng}</p>
                <div className=" flex justify-center space-x-4 px-2">
                  <button className="px-4 py-2 text-white rounded-3xl   transition-colors duration-200 bg-blue-500  hover:bg-blue-700">Afficher le Chemin</button>
                  <button className="px-4 py-2 text-white rounded-3xl  transition-colors duration-200 bg-green-500  hover:bg-green-700">Voir</button>
                  <button className="px-4 py-2 text-white rounded-3xl transition-colors duration-200 bg-gray-400  hover:bg-gray-500">Partager</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
} export default SlideChangeHooks;
