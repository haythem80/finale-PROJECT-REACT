import React from 'react'
import { handlesearch } from '../redux/action';
import { useDispatch } from 'react-redux';

  const Section1 = () => {
    const dispatch = useDispatch();

    const Searchterme = (event) => {
        dispatch(handlesearch(event.target.value));
    };
  
  return (
    <div className='section1'>
        <h1 className="text">Plan Your Vacation</h1>
        <p className="para">Design your perfect vacationsby choosing from <br />the best destinations</p>
        <div className="search">
        <input className='input'
        type="text"
        placeholder="Search items..."
        onChange={Searchterme}
    />
        <button type='submit' className='btn'>Search</button>
        </div>
    </div> 
    
  )
}

export default Section1