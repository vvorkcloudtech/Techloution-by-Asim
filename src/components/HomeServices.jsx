import React, { memo, Fragment } from 'react';
import { connect } from "react-redux";

const HomeServices = memo((props) => {

  let services = props.services.map((value, index) => {
    return (

      <div key={index} className="service">
        <i className={value.icon + " serviceIcon"}></i>
        <h2 className="serviceTitle">{value.title}</h2>
        <p className="servicePara">{value.desc}</p>
      </div>
    )
  })
  return (
    <Fragment>
      <section className="services">
        <h1 className="serviceHeading">{props.heading}</h1>
        <div className="Servicecontainer">
          {services}
        </div>
      </section>
      <section className="tech">
        <h1 className="techHead">Technologies We Use!</h1>
        <div className="techCon"></div>
      </section>
    </Fragment>
  )
})

const mapStateToProps = (state) => {
  return {
    heading: state.data.home.homeService.heading,
    services: state.data.home.homeService.services

  }
}

export default connect(mapStateToProps)(HomeServices)
