import React, { useState, useEffect } from 'react';
import HotelList from './components/HotelList';
import AddHotelForm from './components/AddHotelForm';

function HotelsPage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/hotels')
      .then((response) => response.json())
      .then((data) => setHotels(data));
  }, []);

  return (
    <div>
      <h1>Hotel Management</h1>
      <AddHotelForm setHotels={setHotels} />
      <HotelList hotels={hotels} setHotels={setHotels} />
    </div>
  );
}

export default HotelsPage;
