// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';


const Breeds = () => {
  const data = useSelector(selectBreeds);
  const handleClick = e => {
    console.log(e.target.breed);
  }

  const breeds = data && data.map(breed => {
    return <li data-breed={breed} key={breed} onClick={handleClick}>{breed}</li>;
  })
    


  return (
    <div>
    <h1>Breeds</h1>
    <ul>{breeds}</ul>
    </div>
  )
};

export default Breeds;
