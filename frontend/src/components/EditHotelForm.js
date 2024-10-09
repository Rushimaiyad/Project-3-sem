import React, { useState } from 'react';

function EditHotelForm({ hotel, setHotels, setEditingHotel }) {
  const [name, setName] = useState(hotel.name);
  const [city, setCity] = useState(hotel.city);
  const [price, setPrice] = useState(hotel.price);

  const updateHotel = (e) => {
    e.preventDefault();

    const updatedHotel = { name, city, price };

    fetch(`http://localhost:5000/api/hotels/${hotel._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedHotel),
    })
      .then((response) => response.json())
      .then((updatedHotel) => {
        setHotels((prevHotels) =>
          prevHotels.map((h) => (h._id === hotel._id ? updatedHotel : h))
        );
        setEditingHotel(null); // Close the edit form after updating
      });
  };

  return (
    <form onSubmit={updateHotel}>
      <h2>Edit Hotel</h2>
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
      <button type="submit">Update Hotel</button>
      <button type="button" onClick={() => setEditingHotel(null)}>
        Cancel
      </button>
    </form>
  );
}

export default EditHotelForm;
