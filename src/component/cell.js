
import React, { Component } from 'react';

class Cell extends Component {
  constructor() {
    super();
    this.state = {
      mfonts: {
        k: '&#9818;',
        q: '&#9819;',
        r: '&#9820',
        b: '&#9821',
        n: '&#9822',
        p: '&#9823',
        l: '&#9812;',
        w: '&#9813;',
        t: '&#9814',
        v: '&#9815',
        m: '&#9816',
        o: '&#9817',
      },
      values: ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 't', 'm', 'v', 'w', 'l', 'v', 'm', 't'],
    };
  }

  getFontCode(id) {
    console.log(this.state.values[id]);
    const code = this.state.mfonts[this.state.values[id]];
    return code;
  }

  handleClick = () => {
    console.log('checked');
  }

  updateSquarecolor = (e) => {
    const ele = document.getElementsByClassName('man');
    for (let i = 0; i < ele.length; i += 1) {
      ele[i].style.border = '0px solid #000';
    }
    e.border = '4px solid #f00';
  }

  check = (e) => {
    this.updateSquarecolor(e.target.style);
  }

  render() {
    const pps = this.props;
    const { cell } = pps;
    const stylediv = {
      height: cell.height,
      width: cell.width,
      top: cell.top,
      left: cell.left,
      fontSize: cell.fontSize,
      background: cell.background,
    };

    const classname = cell.class;
    const fontsCode = this.getFontCode(cell.id);
    return (
      <div className={classname} style={stylediv}>
        <div className="man" role="presentation" type="button" onClick={(e => this.check(e))} dangerouslySetInnerHTML={{ __html: fontsCode }} />
      </div>
    );
  }
}

export default Cell;
