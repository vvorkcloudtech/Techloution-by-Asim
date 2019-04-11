import React from 'react'
import { connect } from "react-redux";
const footer = (props) => {
    return (
        <footer className="footer">
            <div className="containerFooter">
                <div className="address">
                    <h1>{props.footer.h1}</h1>
                    <p>{props.footer.address}</p>
                    <h1>{props.footer.h2}</h1>
                    <ul>
                        <li>{props.footer.ph1}</li>
                        <li>{props.footer.ph2}</li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>&copy; {props.footer.copy}</p>

                    <ul>
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
const mapStateToProps = (state) => {
    return {
        footer: state.data.footer,
    }
}

export default connect(mapStateToProps)(footer)
