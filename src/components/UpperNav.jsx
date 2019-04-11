import React, { Fragment, memo } from 'react';
import {connect} from "react-redux";

const UpperNav = memo((props) => {

    let icons = props.icons.map((value, index) => {
        return (
            <li key={index}>
                <i className={value}></i>
            </li>
        )
    })
    return (
        <Fragment>
            <nav className="upperNav">
                <div className="navContainer">
                    <div className="UNleft">
                        <p>
                            <i className="far fa-envelope"></i>
                            Email: <span>{props.email}</span>
                            &nbsp;
                         <i className="fas fa-phone"></i>
                            Phone: <span>{props.phone}</span>
                        </p>
                    </div>
                    <div className="UNright">
                        <ul>
                            {icons}
                        </ul>
                        <button>Contact Us</button>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
})

const mapStateToProps = (state)=>{
    return{
        email: state.data.upperNav.email,
        phone: state.data.upperNav.phone,
        icons: state.data.upperNav.icons,
    }
}

export default connect(mapStateToProps)(UpperNav)
