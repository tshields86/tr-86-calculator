import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';


class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to React Boilerplate</h1>
          <p>A quick and simple setup using React, Node, Express, Bootstrap-Sass, and Webpack</p>
          <Link to="/About">
            <Button bsStyle="danger">Learn more</Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Welcome;
