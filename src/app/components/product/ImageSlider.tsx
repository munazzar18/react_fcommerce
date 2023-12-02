"use client";
import { useState } from "react";

const ImageSlider = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="container">
      <div className="relative">
        <div className="flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-[100%] aspect-[3/2] object-contain mix-blend-color-burn"
          />
        </div>

        <div className="absolute -bottom-10 w-full flex justify-center space-x-4">
          {images.map((image: string, index: number) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`rounded-full h-4 w-4  border border-gray-500 
                        ${
                          index === currentImageIndex
                            ? "bg-gray-500"
                            : "bg-white"
                        }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
