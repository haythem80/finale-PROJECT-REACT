import React from 'react'


const Section1 = () => {

  
  return (
    <div className='section1'>
        <h1 className="text">Plan Your Vacation</h1>
        <p className="para">Design your perfect vacationsby choosing from <br />the best destinations</p>
        <div className="search">
        <input type="text" placeholder='pick your destination' className='input' />
        <button type='submit' className='btn'>Search</button>
        </div>
    </div> 
    
  )
}

export default Section1