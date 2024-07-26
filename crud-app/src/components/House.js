import React, { useState, useEffect } from 'react';

const House = () => {
  const [houses, setHouses] = useState([]);
  const [house, setHouse] = useState({ name: '', address: '' }); // Adjust field names
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Clear the houses list on component mount to start with a blank page
    setHouses([]);
  }, []);

  const handleChange = (e) => {
    setHouse({
      ...house,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Simulate update locally
      setHouses(houses.map(h => h.id === house.id ? { ...house, id: h.id } : h));
      setIsEditing(false);
    } else {
      // Simulate adding new house with a random id
      const newHouse = { ...house, id: houses.length ? houses[houses.length - 1].id + 1 : 1 };
      setHouses([...houses, newHouse]);
    }
    setHouse({ name: '', address: '' });
  };

  const editHouse = (house) => {
    setHouse(house);
    setIsEditing(true);
  };

  const deleteHouse = (id) => {
    // Simulate deletion locally
    setHouses(houses.filter(h => h.id !== id));
  };

  return (
    <div>
      <h1>Houses</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={house.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="address"
          value={house.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {houses.map(h => (
          <li key={h.id}>
            {h.name} - {h.address}
            <button onClick={() => editHouse(h)}>Edit</button>
            <button onClick={() => deleteHouse(h.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default House;
