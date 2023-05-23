/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';


const Breeds = () => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const data = useSelector(selectBreeds);
  const handleClick = e => {
    // eslint-disable-next-line no-unused-vars
    const value = e.target.value.breed;
    let _selectedBreeds = [];
    if (selectedBreeds.indexOf(value) !== -1) {
      const _selectedBreeds = selectedBreeds.filter(x => x !== value);
      setSelectedBreeds(_selectedBreeds);
  }else{
     _selectedBreeds = [...selectedBreeds, value];
  } 
  setSelectedBreeds(_selectedBreeds);
}

  const breeds = data && data.map(breed => {
    return <li data-breed={breed} key={breed} onClick={handleClick}>{breed}</li>;
  })
    
  

  return (
    <div>
    {JSON.stringify(selectBreeds)}
    <h1>Breeds</h1>
    <ul>{breeds}</ul>

    </div>
  )
};

export default Breeds;
