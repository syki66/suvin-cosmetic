import React from "react";

import MainCarousel from "../components/Home/MainCarousel";
import NoticeContact from "../components/Home/NoticeContact";
import Introduction from "../components/Home/Introduction";


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MainCarousel />
        <Introduction />
        <NoticeContact />
      </div>
    );
  }
}
