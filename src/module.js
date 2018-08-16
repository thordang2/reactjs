/**
 * module.js
 */
import React, { Component } from 'react';

class MyComponent extends Component {
  clickedOnce = false;

  componentDidUpdate() {
    console.log('Updated!');
  }

  handleClick = () => {
    if (!this.clickedOnce) {
      console.log('Clicked');
    }
    this.clickedOnce = true;
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
