import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: this.getCurrentTime()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getCurrentTime() {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date().toLocaleTimeString(undefined, options);
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light" style={{color:"white"}}>
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">DailyNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
              <span className="navbar-text">
                {currentTime}
              </span>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
