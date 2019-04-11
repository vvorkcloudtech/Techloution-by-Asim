import React, { Fragment, memo } from 'react';
import HomeAbout from "./HomeAbout";
import { connect } from "react-redux";
import HomeServices from "./HomeServices";

const Home = memo((props) => {



  return (
    <Fragment>
      <section className="home">
        <div className="homeContainer">
          <img src="../images/logo1Mob.png" alt="Techloution logo" className="logoHomeMob" />
          <div className="homeLeft">
            <div className="circle"></div>
            <h1 className="mainHeading">
              {props.heading}  <br /> {props.name}
            </h1>
            <p className="mainPara">
              {props.para}
            </p>

          </div>
          <div className="homeRight">
            <div className="circle2"></div>
            <img className="computer" src={props.img} alt="techloutin computer" />
          </div>
        </div>
      </section>
      <HomeAbout />
      <HomeServices />
    </Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    heading: state.data.home.heading,
    name: state.data.home.name,
    para: state.data.home.para,
    img: state.data.home.img
  }
}

export default connect(mapStateToProps)(Home);
