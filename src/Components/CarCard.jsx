import React from 'react';

import { useNavigate} from 'react-router-dom';

const CarCard = (props) => {
  const Navigate = useNavigate();
   const handleClick= () => 
  {
    Navigate('/CarDetails');
    };



  return (
    <div onClick={handleClick} className="hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"> 
    <div>
        <div className='flex justify-center p-2 bg-white'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img className='w-full' src={props.imageUrl} alt='Car' />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{props.name}</div>
                <p className='text-sm text-gray-700'>
                Comfortable & Spacious Interiors 
                Fuel-Efficient & Reliable Performance
                Modern Safety Features
                GPS & Bluetooth Connectivity 
                </p>
            </div>
            <div className='px-6 py-4'>
                <span className='inline-block bg-black first-line:0 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'>4.62⭐</span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2'>{props.type}</span>
                <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white'>On-Road</span>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CarCard