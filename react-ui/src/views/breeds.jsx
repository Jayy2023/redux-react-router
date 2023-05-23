/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectBreeds } from '../features/breedsSlice';


const Breeds = () => {
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const data = useSelector(selectBreeds);
  const applyActiveClass = (breed) => {
    if(selectBreeds.indexOf(breed) > -1) {
      return 'active';
    }
  }



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
const handleSelectedBreeds = ()=> {
  console.log(selectBreeds);
}

  const breeds = data && data.map(breed => {
    return( 
    <li
    className={selectedBreeds.indexOf(breed)> -1 ? 'active' : ""}
     data-breed={breed} 
     key={breed} 
     onClick={handleClick}
     >
      {breed}
      </li>)
  })
    
  

  return (
    <>
    <div className="breeds-subheader">
       <h1>Breeds</h1>
       {selectedBreeds.length && <button onClick='HandleSelectedBreeds'>Add selections to favorite?</button>})
    </div>
    <ul className="breeds">{breeds}</ul>

    </>
  )
};

export default Breeds;
