import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, 
} from 'reactstrap';
import MathImg from '../images/calculator.svg';
import ScienceImg from '../images/microscope.svg';
import ArtImg from '../images/pencil-case.svg';



const Cards = (props) => {
  return (
<React.Fragment>
<div className="container">
  <div className="row">
    <div className="col">
        <Card className="card">
          <CardImg className="cardImg" src={ArtImg} alt="Card image" />
          <CardBody>
            <CardTitle className="cardTitle">Art</CardTitle>
          </CardBody>
        </Card>
    </div>
    <div className="col"> 
      <Card className="card" >
        <CardImg className="cardImg" src={ScienceImg} alt="Card image" />
        <CardBody>
          <CardTitle className="cardTitle">Science</CardTitle>
        </CardBody>
      </Card>
    </div>
    <div className="col" >
      <Card className="card">
        <CardImg className="cardImg"  src={MathImg} alt="Card image" />
        <CardBody>
          <CardTitle className="cardTitle">Math</CardTitle>
        </CardBody>
      </Card>
    </div>
  </div>
</div>
</React.Fragment>
  );
};

export default Cards;



