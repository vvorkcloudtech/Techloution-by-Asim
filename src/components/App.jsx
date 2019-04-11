import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";


import UpperNav from './UpperNav';
import LowerNav from "./LowerNav";
import NavMob from "./NavMob";
import Home from './Home';
import Contact from "./Contact";
import Team from "./Team";
import Footer from "./footer";


class App extends Component {
    state = {
        navCss: {
            backgroundColor: "rgba(1, 190, 231, 0.5)",
            height: "120px",
        }
    }
    componentDidMount = () => {
        document.addEventListener("scroll", () => {
            let scroll = window.scrollY;
            if (scroll > 40) {
                let newState = { ...this.state };
                newState.navCss = {
                    backgroundColor: "white",
                    boxShadow: "0px 1px 10px black",
                }
                if (this.state.navCss.backgroundColor != newState.navCss.backgroundColor) {
                    this.setState({ ...newState })
                }
            }
            if (scroll < 40) {
                let newState = { ...this.state };

                newState.navCss = {
                    backgroundColor: "rgba(1, 190, 231, 0.5)",
                    boxShadow: "none",
                }
                if (this.state.navCss.backgroundColor != newState.navCss.backgroundColor) {
                    this.setState({ ...newState })
                }
            }
        })
    }

    render() {
        return (
            <Fragment>

                <UpperNav />

                <LowerNav styles={this.state.navCss} />

                <NavMob />

                <Route exact path="/" render={() => <Home />}></Route>
                
                <Route exact path="/team" render={() => <Team />}></Route>

                <Route exact path="/contact" render={() => <Contact />}></Route>

                <Footer />
            </Fragment>
        );
    }
}


export default App;
{/* <Route exact path="/" component={Home}></Route> */ }