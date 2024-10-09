import React, { useState } from 'react';

function AddHotelForm({ setHotels }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');

  const addHotel = (e) => {
    e.preventDefault();
    const newHotel = { name, city, price };

    fetch('http://localhost:5000/api/hotels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHotel),
    })
      .then((response) => response.json())
      .then((hotel) => setHotels((prevHotels) => [...prevHotels, hotel]));

    setName('');
    setCity('');
    setPrice('');
  };

  return (
    <form onSubmit={addHotel}>
      <input
        type="text"
        placeholder="Hotel Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add Hotel</button>
    </form>
  );
}

export default AddHotelForm;
