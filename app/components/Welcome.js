import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';


class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>TR-86 Calculator</h1>
          <p>A lightning fast calculator for everyday use</p>
          <Link to="/Calculator">
            <Button bsStyle="info" bsSize="large">Try it out</Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Welcome;
