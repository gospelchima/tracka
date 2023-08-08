import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/me.jpg";
const Hero = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img1}  />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">click</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Hero