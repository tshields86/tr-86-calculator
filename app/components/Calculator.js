import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';


const Calculator = React.createClass({

  render: function () {
    return (
      <div>
        <h2>Calculator</h2>
        <Link to="/">
          <Button bsStyle="default" bsSize="small">Home</Button>
        </Link>
      </div>
    );
  }
});

export default Calculator;
