import React, { Component } from 'react';
import Navigation from 'Navigation';


const Main = React.createClass({

  render: function () {
    return (
      <div>
        <Navigation/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Main;
