import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaHotel } from "react-icons/fa"; 
import { FaEarthAfrica } from "react-icons/fa6";
import { RiShipFill } from "react-icons/ri";
const Section2 = () => {
  return (
    <div className='section2'>
    <Card style={{ width: '18rem' }} className='card'>
    <Card.Body>
      <Card.Title><FaEarthAfrica className='earth' /> </Card.Title>
      <Card.Title className='cardtitle'>Vacation</Card.Title>
      <Card.Text>
        choice your favorite destination to enjoy.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><FaHotel  className='hotel'/></Card.Title>
    <Card.Title className='cardtitle'>Hotels</Card.Title>
    <Card.Text>
      we have the best hotel with perfect service.
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title><RiShipFill className='ship' /></Card.Title>
  <Card.Title className='cardtitle'>Cruises</Card.Title>
  <Card.Text>
    you will have the best travel with our agence.
  </Card.Text>
</Card.Body>
</Card>
    <div>
    <h1 className="titre"> Recommended Tours</h1>
    </div>
    
    </div>
  )
}

export default Section2