import React from "react";

import MainCarousel from "../components/Home/MainCarousel";
import BusinessIntro from "../components/Home/BusinessIntro";
import NoticeContact from "../components/Home/NoticeContact";


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MainCarousel />
        <BusinessIntro />
        <NoticeContact />
      </div>
    );
  }
}
