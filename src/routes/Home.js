import React from "react";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Home extends React.Component {
  render() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            width={2000}
            showStatus={false}
            showThumbs={false}
          >
            <div>
              <img src="http://www.suvincos.com/sh_img/index/main_banner/main_banner_01.png" alt="pic01" />
            </div>
            <div>
              <img src="http://www.suvincos.com/sh_img/index/main_banner/main_banner_02.png" alt="pic02" />
            </div>
          </Carousel>
        </div>
    );
  }
}
