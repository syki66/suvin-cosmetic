import React from "react";

import HomeCarousel from "../components/Home_Components/HomeCarousel";
import HomeIntroduction from "../components/Home_Components/HomeIntroduction";


export default class Home extends React.Component {
  render() {
    return (
      <div className="so_special">
        <HomeCarousel />
        <HomeIntroduction />
      </div>
    );
  }
}
