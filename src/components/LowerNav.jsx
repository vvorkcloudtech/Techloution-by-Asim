import React, { Component, Fragment, memo } from 'react';
import Sticky from "react-sticky-el";
import { Link, NavLink } from "react-router-dom";
import {connect} from "react-redux";

const LowerNav = memo((props) => {
  let activeStyleNav = {
    color: "#01BEE7 ",
    borderBottom: " 1px solid #01BEE7",
  };
  
  let navBar = props.navMenus.map((value, index) => {
    return (
      <li key={index}>
        <NavLink onClick={props.navWebClicker} exact strict activeStyle={activeStyleNav} className="link" to={props.navLinks[index]}>{value}</NavLink>
      </li>
    )
  })
  let i = 1;
  
  return (
    
    <Fragment>
      <Sticky style={{ zIndex: 10000000 }}>
        <nav style={props.styles} className="lowerNav">
          <div className="LnavContainer">
            <img src={props.logo} alt="techloution logo" />
            <ul>
              {navBar}
            </ul>
          </div>
        </nav>
      </Sticky>
    </Fragment>
  )
})

const mapStateToProps = (state)=>{
  return{
      logo: state.data.lowerNav.logo,
      navMenus: state.data.lowerNav.navMenus,
      navLinks: state.data.lowerNav.navLinks
  }
}
const mapDispatchToProps = (dispach) => {
  return {
    navWebClicker: () =>{
      window.scrollTo(0, 0)

    }
      // onAgeUp: () => dispach({ type: "AGE_UP", value: 2 }),
      
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(LowerNav)
