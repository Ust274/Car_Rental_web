import BookingForm  from "../Components/BookingForm";

import React from 'react'

const Bookings = () => {
  return (
    <>
    <div className="bg-blue-700 bg-blend-lighten h-full">
        <h1 className="text-5xl font-bold text-center p-7 text-teal-700 bg-amber-300">Book your Ride in a hasstle Free way</h1>
        <p className="text-xl font-semibold text-center p-4 text-white">Fill the form below to book your ride</p>
        <BookingForm />
    </div>
    </>
  )
}

export default Bookings