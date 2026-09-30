import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Landing2ndComp() {
  const [data] = useState([
    {
      link: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800",
      name: "Pottery Collection",
      text: "Handcrafted Clay Art"
    },
    {
      link: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=800",
      name: "Woven Textiles",
      text: "Traditional Weaving"
    },
    {
      link: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=800",
      name: "Wooden Crafts",
      text: "Carved Excellence"
    },
    {
      link: "https://images.unsplash.com/photo-1621265737997-14043e9882f5?q=80&w=800",
      name: "Metal Art",
      text: "Handforged Beauty"
    }
  ]);

  const [popup, setPopup] = useState(false);
  const openPopup = () => setPopup(true);
  const closePopup = () => setPopup(false);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 >= Math.ceil(data.length / itemsPerPage) ? 0 : prevPage + 1
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(data.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  const displayedItems = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="middlepart flex flex-col bg-amber-50">
      <div className="banner pt-[20px] flex justify-center">
        <div className="w-[1100px] h-[200px] bg-gradient-to-r from-amber-700 to-orange-600 rounded-lg flex items-center justify-center">
          <h2 className="text-4xl text-white font-serif">Discover Our Artisan Collection</h2>
        </div>
      </div>

      <div className="flex mt-5 mx-[140px] my-5">
        <h1 className="text-3xl font-bold text-[#8B4513]">Featured Categories</h1>
      </div>

      <div className="flex flex-wrap gap-5 mb-5 items-center mx-[120px] justify-around">
        {displayedItems.map((value, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-[380px] w-[380px] overflow-hidden">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={value.link}
                alt={value.name}
                onClick={openPopup}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-serif mb-2">{value.name}</h3>
              <div className="h-[2px] w-20 bg-amber-500 mb-2"></div>
              <p className="text-sm opacity-90">{value.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mx-[130px] my-8 gap-3">
        <div className="border-b-2 border-amber-800/20 w-full"></div>
        <div className="flex justify-center items-center gap-3">
          <button
            className="bg-amber-800 hover:bg-amber-900 px-4 py-2 rounded-full text-white transition-colors"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-full text-white transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="border-b-2 border-amber-800/20 w-full"></div>
      </div>
    </div>
  );
}