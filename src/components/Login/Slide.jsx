import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slide = ({imgSrc}) => {

    // const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    
    // useEffect(() => {
    //     function handleResize() {
    //   setScreenWidth(window.innerWidth);
    // }

    // window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener('resize', handleResize);
    // }, [])
    return (
        <div>
    <Carousel>
    <Carousel.Item>
    <img
      // style={  screenWidth > 500 ? {height:'70vh'} : {height:'35vh'} }
      className="d-block w-100"
      src={imgSrc}
      alt='slide-img'
    />
  </Carousel.Item>
      <Carousel.Item>
    <img
    //  style={  screenWidth > 500 ? {height:'70vh'} : {height:'35vh'} }
      className="d-block w-100"
      src={imgSrc}
      alt='slide-img'
    />
  </Carousel.Item>
      <Carousel.Item>
    <img
      // style={  screenWidth > 500 ? {height:'70vh'} : {height:'35vh'} }
      className="d-block w-100"
      src={imgSrc}
      alt='slide-img'
    />
  </Carousel.Item>
</Carousel>  
        </div>
    )
}

export default Slide
