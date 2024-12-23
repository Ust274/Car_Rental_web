import React from 'react';
import { useNavigate} from 'react-router-dom';
const CarCard = () => {
  const Navigate = useNavigate();
  const imageUrl = 'src/assets/Images/pexels-mikebirdy-170811.jpg';
   const handleClick= () => 
    {
    Navigate('/CarDetails');
    };


  return (
    <div onClick={handleClick} className="hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"> 
    <div>
        <div className='flex justify-center p-2 bg-white'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img className='w-full' src={imageUrl} alt='Car' />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>Car Name</div>
                <p className='text-gray-700 text-base'>Car Description</p>
            </div>
            <div className='px-6 py-4'>
                <span className='inline-block bg-black first-line:0 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'>4.67⭐</span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag2</span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>#tag3</span>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CarCard