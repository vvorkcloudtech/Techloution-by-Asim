import React, { Fragment, memo } from 'react';
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavMob = memo((props) => {
  
  let navMob = props.navMenus.map((value, index) => {
    return (
      <li key={index}>
        <NavLink activeStyle={{ background: "#134368" }} exact strict className="linkMob" to={props.navLinks[index]}>{value}</NavLink>
      </li>
    )
  });

  return (
    <Fragment>
      <nav className="navMOb">
        <i className="fas fa-bars myBars" onClick={props.clicker}></i>
        <ul className="listMob" onClick={props.navClicker}>
          {navMob}
        </ul>
      </nav>
    </Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    navMenus: state.data.lowerNav.navMenus,
    navLinks: state.data.lowerNav.navLinks,
  }
}
const mapDispatchToProps = (dispach) => {
  return {
    clicker: () => {
      let bar = document.querySelector(".myBars");
      let nav = document.querySelector(".listMob");

      if (nav.clientHeight == 0) {
        nav.style.height = "500px";

        bar.style.transform = "rotate(90deg)"
      } else {
        nav.style.height = "0";
        bar.style.transform = "rotate(0deg)"
      }
    },

    navClicker: () => {
      let bar = document.querySelector(".myBars");
      let nav = document.querySelector(".listMob");

      nav.style.height = "0";
      bar.style.transform = "rotate(0deg)";
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavMob)

