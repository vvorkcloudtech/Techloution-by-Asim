import React from 'react'
import { connect } from "react-redux";
const Team = (props) => {

  return (
    <section className="teamContainer">
      <h1 className="mainTeamHeading">Our Team</h1>
      <div className="teamButtons">
        <button className="faraz  selected" onClick={props.faraz} >{props.buttons.faraz}</button>
        <button className="asim " onClick={props.asim}>{props.buttons.asim}</button>
        <button className="faheem " onClick={props.faheem}>{props.buttons.faheem}</button>
        <button className="ahmed " onClick={props.ahmed}>{props.buttons.ahmed}</button>
        <button className="wahab " onClick={props.wahab}>{props.buttons.wahab}</button>
      </div>
      <div className="teamInfo">
        <div className="leftTeam">
          <img src={props.member.pic} alt="" />
        </div>
        <div className="rightTeam">
          <h1 className="memberName">{props.member.name}</h1>
          <h3 className="memberTitle">{props.member.title}</h3>
          <em className="memberSkills">{props.member.skills}</em>
          <p className="memberPara">{props.member.about}</p>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    buttons: state.data.team.buttons,
    member: state.data.team.toShow,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    asim: () => {
      dispatch({ type: "ASIM_BILAL" });
      let selected = document.querySelector(".selected");
      let asim = document.querySelector(".asim");

      selected.classList.remove("selected");
      asim.classList.add("selected");
    },
    faraz: () => {
      dispatch({ type: "FARAZ_NADEEM" });
      let selected = document.querySelector(".selected");
      let faraz = document.querySelector(".faraz");

      selected.classList.remove("selected");
      faraz.classList.add("selected");
    },
    faheem: () => {
      dispatch({ type: "FAHEEM_SALEEM" });
      let selected = document.querySelector(".selected");
      let faheem = document.querySelector(".faheem");

      selected.classList.remove("selected");
      faheem.classList.add("selected");
    },
    wahab: () => {
      dispatch({ type: "ABDUL_WAHAB" });
      let selected = document.querySelector(".selected");
      let wahab = document.querySelector(".wahab");

      selected.classList.remove("selected");
      wahab.classList.add("selected");
    },
    ahmed: () => {
      dispatch({ type: "AHMED_RAIZ" });
      let selected = document.querySelector(".selected");
      let ahmed = document.querySelector(".ahmed");

      selected.classList.remove("selected");
      ahmed.classList.add("selected");
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)
