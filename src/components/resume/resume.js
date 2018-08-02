import React, { Component } from 'react'
import './resume.css';
import { Card, CardHeader, CardBody, CardText, Row, Col } from 'reactstrap'


const colorblack = {
  color: 'black'
}

class Resume extends Component {

    
    render() {
        return (
        <body className="portfolio-page">
          <div className="p-bg"> 
         
              <div className="p-text-container">
                <h1 className="p-text" data-aos="fade-down">Portfolio</h1>
                <div className="cards ">
                  <Row> 
                    <Col sm="4" className="mycard1 hvr-float-shadow" data-aos="fade-down" >
                      <Card className="Card Card1" >
                      <a href="/" style={{textDecoration:"none"}}> 
                        <CardHeader tag="h3" style={colorblack}> My React Portfolio</CardHeader>
                          <CardBody>
                            <img className="image" width="100%" src="/" alt=""/>
                            <CardText className="p-text">Cuivie Adanedhel Coranar Avari Cirth Áze Certar Ereg Brith Quel re, Estel Elen, Eleni, Elenion Atan, Atani Alda Pelargir Andúnë Anod Formen, Echuir Cú Numen Úlairi Cú Ambarona Dôr Echuir.</CardText>
                          </CardBody>
                          </a>  
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard2 hvr-float-shadow" data-aos="fade-down" data-aos-delay="400">
                      <Card className="Card Card2"> 
                      <a href="/" style={{textDecoration:"none"}}>
                        <CardHeader tag="h3" style={colorblack}> Avari Cirth Áze Certar </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="/" alt="" />
                          <CardText className="p-text"> </CardText>
                        </CardBody>
                       </a>
                      </Card>
                    </Col>
                    <Col sm="4" className="mycard3 hvr-float-shadow" data-aos="fade-down" data-aos-delay="700">
                      <Card className="Card Card3">
                        <CardHeader tag="h3"> Ereg Brith Quel re </CardHeader>
                        <CardBody>
                          <img className="image" width="100%" src="" alt="Responsive Cards"/>
                          <CardText className="p-text"> Echuir Cú Numen Úlairi Cú Ambarona Dôr Echuir </CardText>
                        </CardBody>
                       
                      </Card>
                    </Col>
                  </Row>
                </div>
            </div>
              
               
          </div>    
        </body>
        )
    }

}

export default Resume;