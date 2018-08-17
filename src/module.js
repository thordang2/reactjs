/**
 * module.js
 */
import React, { Component } from 'react';
import Cell from './component/cell';

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
    const w = window.innerWidth || 360;
    const h = window.innerHeight || 500;
    const tsw = (w > h) ? h : w;
    const sw = (tsw - 16) / 8;
    const b = [];

    for (let n = 0; n < 64; n += 1) {
      let bground = '#9ff';
      if (Math.floor(n / 8) % 2 === 0) {
        if (n % 2 === 0) {
          bground = '#9ff';
        } else {
          bground = '#5fa';
        }
      } else if (n % 2 === 1) {
        bground = '#9ff';
      } else {
        bground = '#5fa';
      }

      const prop = {
        id: n,
        class: `square s${n}`,
        height: sw,
        width: sw,
        top: 7 + (h - tsw) / 2 + sw * (Math.floor(n / 8)),
        left: 7 + (w - tsw) / 2 + sw * (Math.floor(n % 8)),
        fontSize: sw * 3 / 4,
        background: bground,
      };
      b.push(prop);
    }
    const cells = b.map(cell => (
      <span key={cell.class}>
        <Cell cell={cell} />
      </span>
    ));
    return (
      <ul className="board">
        {cells}
      </ul>
    );
  }
}

export default MyComponent;
