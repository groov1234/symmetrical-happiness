import React, { Component } from 'react'
import './home.css';

const colorwhite = {
  color: 'white'
}

class Home extends Component {


    render() {
        return (
        <body className="home-page">
          <div className="bg"> 
            
              <div className="text-container">
                <div className="newtext" data-aos="fade-down" data-aos-delay="200">
                  <h1 className="text" style={colorwhite}>Jeff</h1>
                  <h4 className="text2">The Touched One</h4>
                </div>
                <div class="scrolltxt">Scroll Down</div>
                <div class="arrow bounce"></div>

              </div>
                <p className="quote" data-aos="fade-down" data-aos-delay="800">I'm not smart.</p>
          </div>    
        </body>
        )
    }
}
export default Home;