import React, { useState } from 'react';
import './SearchForm.css'

function SearchForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='searchbar' type="text" placeholder="Search location" value={city} onChange={(e) => setCity(e.target.value)} />
    </form>
  );
}

export default SearchForm;
