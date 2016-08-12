import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';


class About extends Component {
  render() {
    return (
      <div>
        <h2>TR-86 Calculator</h2>
        <h3>Built with React, Node, Express, Bootstrap, Webpack, Bootstrap, and Sass</h3>
        <br/><br/>
        <Link to="/Calculator">
          <Button bsStyle="info" bsSize="large">Calculate</Button>
        </Link>
      </div>
    );
  }
}

export default About;
