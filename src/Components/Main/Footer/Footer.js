import React, { Component } from "react";
import './Footer.css'
class Footer extends Component {
  render() {
    return (
      <div className=" Footer_Heigh bg-dark center">
        <div className="row p-2 ">
          <div className="col-md-12 center text-light flex-column ">
            <h4>Movies App Design By Sajjad Naseri zadeh</h4>
            <div>
              <a
            style={{fontSize:16}}
                className="mx-2  badge badge-light" href="https://github.com/sajjadatma">github.com/sajjadatma</a>
            <span
            style={{fontSize:16}}
                className="mx-2  badge badge-light" href="https://github.com/sajjadatma">Sjjadnaserizadeh@gmail.com</span>
               <a
            style={{fontSize:16}}
                className="mx-2  badge badge-light" href="https://www.instagram.com/sajjadatma/">instagram.com/sajjadatma</a>
               <a
            style={{fontSize:16}}
                className="mx-2  badge badge-light" href="https://www.linkedin.com/in/sajjadnaserizadeh/">Linkedin.com/sajjadnaserizadeh</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
