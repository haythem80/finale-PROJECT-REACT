import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel >
      <Carousel.Item className='item'>
        <img src="https://apiimg.iberostar.com/uploads/image/25494/crops/16:9/720/image.jpeg" alt="beach" id="image" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
      <img src="https://www.wealthmanagement.com/sites/wealthmanagement.com/files/las-vegas-casino-revenue.jpg" alt="casino" id="image" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='item'>
      <img src="https://static.saltinourhair.com/wp-content/uploads/2019/03/23140725/best-travel-quotes-philippines.jpg" alt="shopping" id="image" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;