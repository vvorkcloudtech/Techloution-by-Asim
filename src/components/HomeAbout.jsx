import React, { Fragment, memo } from 'react';
import {connect} from "react-redux";

const HomeAbout = memo((props) => {
    let experties = props.content.map((value, index) => {
        return (
            <div key={index} className="expertStats">
                <h1 className={value.headingClass}>{value.headingContent}</h1>
                <p>{value.para}</p>
            </div>
        )
    })
    return (
        <div>
            <section className="about">
                <div className="heading">
                    <h1>About <span>Techloution</span></h1>
                </div>
                <div className="paragraph">
                    <p>{props.para}</p>
                </div>
                <div className="experties">
                    {experties}
                </div>
            </section>
        </div>
    )
});

const mapStateToProps = (state)=>{
    return{
        para: state.data.home.homeAbout.mainPara,
        content: state.data.home.homeAbout.content,
    }
}

export default connect(mapStateToProps)(HomeAbout)
