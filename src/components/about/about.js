import React, { Component } from 'react'
import './about.css';
import AOS from 'aos';
import myPic from './jeff.png'
class About extends Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
          })
    }
    render() {
        return (
        <body className="about-page">
          <div className="ab-bg"> 
          
              <div className="ab-text-container center-center">
                <div className="textytext hvr-shutter-out-horizontal">
                <h1 className="ab-text" data-aos="fade-down">About Me</h1>
                <img className="pic" src={myPic} alt="mypic" data-aos="fade-down" data-aos-delay="200" />
                <div className="ab-text2" data-aos="fade-up" data-aos-delay="400"> 
                    <p>His name is Jeff
                        <br/>
                        <br/>
                        Jeff is touched in the head. 
                        <br/>
                        Jeff doesn't speak well.
                        <br/>
                        <br/>
                        <p className="line">...Don't be Jeff.</p> 
                    </p>
                </div>
                </div>
              </div>
               
          </div>    
        </body>
        )
    }

}

export default About;