import React from "react";

import HomeCarousel from "../components/Home/HomeCarousel";
import HomeIntroduction from "../components/Home/HomeIntroduction";


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeCarousel />
        <HomeIntroduction />
      </div>
    );
  }
}
