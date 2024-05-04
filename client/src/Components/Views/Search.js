import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext.js';
import '../Card.css';

const Search = () => {
  const { setSearchData } = useAuth();
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearch = async () => {
    try {
      if (!query) {
        window.location.reload();
        return;
      }
      
      const response = await axios.get(`http://localhost:4000/add/search?query=${query}`);
      setImages(response.data);
      setSearchData(response.data); // Set search data in context
      setSearchClicked(true);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleQueryChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value) {
      setImages([]);
      setSearchClicked(false);
    }
  };

  const renderCardData = searchClicked && query.trim() !== '' ? (
    images
      .filter(image => 
        (image.placeName && image.placeName.toLowerCase().includes(query.trim().toLowerCase())) || 
        (image.cityName && image.cityName.toLowerCase().includes(query.trim().toLowerCase()))
      )
      .map(image => (
        <Link 
          to={{ 
            pathname: `/details/${image._id}`, 
            state: { 
              image: image.image, 
              placeName: image.placeName,
              description: image.description
            } 
          }} 
          key={image._id} 
          className="card-link"
        >
          <div className='card'>
            <img className='img' src={image.image} alt={image.placeName} />
            <div className="container">
              <h2 className='placename'>{image.placeName}</h2>
              <p className='para'>{image.description}</p>
            </div>
            
          </div>
        </Link>
      ))
  ) : null;
  
  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button onClick={handleSearch}>Search</button>
      {renderCardData}
      
    </div>
  );
};

export default Search;
