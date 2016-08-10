import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';


const Calculator = React.createClass({

    getInitialState: function () {
      return {
        screen: 0,
        expression: [],
        mathExpression: null,
        currentNum: null
      };
    },

    onClick: function (e){
      e.preventDefault();
      let buttonValue = e.target.value;
      console.log("buttonValue:",buttonValue);
      if (buttonValue === "="){
        let mathExpression = eval(this.state.mathExpression)
        let expression = [];
        expression.push(mathExpression);
        this.setState({
          mathExpression: mathExpression,
          expression: expression
        });
        this.display(mathExpression);
      } else if (buttonValue === "ac") {
        this.setState({
          expression: [],
          mathExpression: null,
          currentNum: null
        });
        this.display(0);
      } else if (buttonValue === "del") {
        let expression = this.state.expression
        expression.pop();
        this.setState({
          expression: expression,
          mathExpression: this.state.expression.join('')
        });
        this.display(this.state.expression.join(''))
      } else {
        let expression = this.state.expression
        expression.push(buttonValue);
        this.setState({
          expression: expression,
          mathExpression: this.state.expression.join(''),
        });
        this.display(this.state.expression.join(''));
      }
    },

    display: function(value) {
      this.setState({screen: value})
    },

  render: function () {
    let {screen} = this.state;

    return (
      <div>
        <div id='case'>
          <div id='screen'>
            <p id="digits">{screen}</p>
          </div>
          <div>
            <button id="ac" ref="ac" className="operation" value="ac" onClick={this.onClick}>A/C</button>
            <button id="div" ref="div"  className="operation" value="/" onClick={this.onClick}>/</button>
            <button id="mult" ref="mult" className="operation" value="*" onClick={this.onClick}>*</button>
            <button id="del" ref="del" className="operation" value="del" onClick={this.onClick}>&#x232b;</button>

            <button id="button7" ref="button7" value="7" className="number" onClick={this.onClick}>7</button>
            <button id="button8" ref="button8" value="8" className="number" onClick={this.onClick}>8</button>
            <button id="button9" ref="button9" value="9" className="number" onClick={this.onClick}>9</button>
            <button id="subtract" ref="subtract" className="operation" value="-" onClick={this.onClick}>-</button>

            <button id="button4" ref="button4" value="4" className="number" onClick={this.onClick}>4</button>
            <button id="button5" ref="button5" value="5" className="number" onClick={this.onClick}>5</button>
            <button id="button6" ref="button6" value="6" className="number" onClick={this.onClick}>6</button>
            <button id="add" ref="add" className="operation" value="+" onClick={this.onClick}>+</button>

            <button id="button1" ref="button1" value="1" className="number" onClick={this.onClick}>1</button>
            <button id="button2" ref="button2" value="2" className="number" onClick={this.onClick}>2</button>
            <button id="button3" ref="button3" value="3" className="number" onClick={this.onClick}>3</button>
            <button></button>

            <button id="buttondot" ref="buttondot" className="operation" value="." onClick={this.onClick}>.</button>
            <button id="button0" ref="button0" value="0" className="number" onClick={this.onClick}>0</button>
            <button></button>
            <button id="equal" ref="equal" className="operation" value="=" onClick={this.onClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
});

export default Calculator;
