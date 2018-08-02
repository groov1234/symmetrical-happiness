import React, { Component } from 'react'
import './skills.css';
import { Table } from 'reactstrap';

class Skills extends Component {

    render() {
        return (
        <body className="skills-page">
          <div className="s-bg"> 
             
              <div className="s-text-container">
                <h1 className="s-text" data-aos="fade-down">Skills</h1>
               
                  <Table hover className="datas" data-aos="flip-up"> 
                    <thead>
                      <tr className="head">
                        <th>HTML</th>
                        <th>CSS</th>
                        <th>Javascript</th>
                        <th>Front-End</th>
                        <th>Back-End</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      <tr>
                        <td>HTML5</td>
                        <td>CSS3</td>
                        <td>Javascript(ES6)</td>
                        <td>Github</td>
                        <td>Javascript(ES6)</td>
                      </tr>
                      <tr>
                        <td>JSX</td>
                        <td>Transitions</td>
                        <td>ReactJS</td>
                        <td>Visual Studio Code</td>
                        <td>Express</td>
                      </tr>
                      <tr>
                          <td>Bootstrap</td>
                          <td>FlexBox</td>
                          <td>RESTful/ CRUD APIs</td> 
                          <td>Responsive Sites</td>
                          <td>NodeJS</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Grid</td>
                          <td>Redux</td>
                          <td>Heroku</td>
                          <td>Heroku</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>Bootstrap</td>
                          <td>Mocha/Chai testing</td>
                          <td></td>
                          <td></td>
                      </tr>
                      <tr>
                          <td></td>
                          <td>HTML Canvas</td>
                          <td>RegEX</td>
                          <td></td>
                          <td></td>
                      </tr>
                    </tbody>
                  </Table>
                
              </div>
                <p className="s-quote" data-aos="fade-down">Idiot Savant in training</p>
          </div>    
        </body>
        )
    }
}
export default Skills;