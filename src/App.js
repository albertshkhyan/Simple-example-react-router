import React, { Component } from 'react';
import './App.css';
import { Animated } from "react-animated-css";
// import closeBtnSvg from './assets/svg/';


// import jsSvg from './assets/svg/js_course.svg';
// import javaSvg from './assets/svg/java_course.svg';
// import qaSvg from './assets/svg/qa_course.svg';
// import nodeJsSvg from './assets/svg/nodeJs_course.svg';

import reactLogo from './assets/Images/levelUpMainLogo.png';
import './App.css';
import { Switch, NavLink, Route } from 'react-router-dom';

import { Home, AboutUs, Blog, Service } from './Page';

////https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path


class NavMenu extends Component {
  state = {}
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/Service">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>

    );
  }
}


class App extends Component {


  render() {
    return (
      <main>
        <header className="header flexible">
          <NavMenu />

        </header>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Service" component={Service} />
          <Route exact path="/AboutUs" component={AboutUs} />
        </Switch>
      </main>

    )
  }
}

export default App;
