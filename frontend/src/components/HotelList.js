import React, { useState } from 'react';
import EditHotelForm from './EditHotelForm';

function HotelList({ hotels, setHotels }) {
  const [editingHotel, setEditingHotel] = useState(null);

  const deleteHotel = (id) => {
    fetch(`http://localhost:5000/api/hotels/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setHotels((prevHotels) => prevHotels.filter((hotel) => hotel._id !== id));
    });
  };

  const handleEditClick = (hotel) => {
    setEditingHotel(hotel); // Set the current hotel for editing
  };

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name} - {hotel.city} - ${hotel.price}
            <button onClick={() => handleEditClick(hotel)}>Edit</button>
            <button onClick={() => deleteHotel(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>

      {editingHotel && (
        <EditHotelForm
          hotel={editingHotel}
          setHotels={setHotels}
          setEditingHotel={setEditingHotel}
        />
      )}
    </div>
  );
}

export default HotelList;
