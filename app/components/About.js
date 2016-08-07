import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';


class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>About Page</h2>
        <Link to="/">
          <Button bsStyle="default" bsSize="small">Home</Button>
        </Link>
      </div>
    );
  }
}

export default About;
