'use client'
import Carousel from 'react-bootstrap/Carousel';
 const ListCarousel=()=>{

    return  <Carousel data-bs-theme="dark">

    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://c4.wallpaperflare.com/wallpaper/596/554/439/nature-white-flowers-green-background-plants-wallpaper-preview.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://static.vecteezy.com/system/resources/thumbnails/031/624/711/small_2x/yellow-flowers-in-a-vase-on-a-green-background-ai-generated-photo.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}
export {ListCarousel}