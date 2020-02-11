import React, { Component } from "react";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Toolbar, AppBar } from '@material-ui/core';


const photos = [
  {
    name: 'Photo 1',
    url: "http://www.suvincos.com/sh_img/index/main_banner/main_banner_01.png"
  },
  {
    name: 'Photo 2',
    url: "http://www.suvincos.com/sh_img/index/main_banner/main_banner_02.png"
  }
]



export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>

          </Toolbar>
        </AppBar>

        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>




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
      </div>
    );
  }
}
