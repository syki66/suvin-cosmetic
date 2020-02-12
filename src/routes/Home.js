import React from "react";

import HomeCarousel from "../components/Home_Components/HomeCarousel";
import HomeHoverEffect from "../components/Home_Components/HomeHoverEffect";
import HomeContact from "../components/Home_Components/HomeContact"



export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeCarousel />
        <HomeHoverEffect />
        <HomeContact />
      </div>
    );
  }
}
