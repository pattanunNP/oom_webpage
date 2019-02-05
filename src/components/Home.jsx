import React, {Component} from 'react'
import {Carousel, Card,Col, Container} from 'react-bootstrap';
import './Home.css'
import {Animated} from "react-animated-css";
import SnowStorm from 'react-snowstorm';
import ReactPlayer from 'react-player' ;
export default class  Home extends Component {

  render() {
    return (
   
<div>
  <SnowStorm />
  <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
<div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h4 className="text1">ยินดีต้อนรับสู่สวนดอกไม้ของคุณอุ้ม</h4>
      <a className="text1" href="/about">เข้าสู่เว็บไซต์</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/oom (3).jpg"
      alt="3"
    />

    <Carousel.Caption>
      <h3><h1 className="text1">Oomim Gallery </h1>
        <a className="text1" href="/gallery">ชม Gallery</a></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./Image/oom (4).jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="text1">Oomim Goods</h1>
        <a className="text1" href="/shop">ซื้อGoods</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</Animated> 
 
<h1 className="text">OOM BNK48 ORIGINAL FANSONG</h1>
<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=2d5ATnB5Pp4'
          width='100%'
          height='100%'
        />

</div>
</div>

  );
  }
}
