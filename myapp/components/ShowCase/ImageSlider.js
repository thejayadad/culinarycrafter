import React, { useState } from 'react';
import ImageDot from './ImageDot';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';



const ImageSlider = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const goToNextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };  
    const goToPrevImage = () => {
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };  
    const goToImage = (index) => {
      setCurrentImage(index);
    };
  return (
    <div className='relative overflow-hidden'>
    <div className='h-[425px]'>
    <img className='w-full h-full object-cover' src={images[currentImage]} alt='pic' />
    </div>

    {/* Direct Image Button */}
    <div  className='absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-3'>
    {images.map((_, index) => (
        <ImageDot
         key={index}
         active={index === currentImage}
         onClick={() => goToImage(index)}
        />
    ))}
    </div>
    

    {/* Previous Next Button */}
        <button
        className='absolute left-0 top-1/2 transform-translate-7-1/2 px-2 text-white'
        >
            <MdNavigateBefore 
            onClick={goToPrevImage}
            size={24}
             />

        </button>

        <button
        className='absolute right-0 top-1/2 transform-traslate-y-1/2 px-2 text-white'
        >
            <MdNavigateNext size={24} 
            onClick={goToNextImage}
            />

        </button>


    </div>
  )
}

export default ImageSlider
