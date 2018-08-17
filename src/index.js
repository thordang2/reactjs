/**
 * index.js
 */
import React from 'react';
import { render } from 'react-dom';
import Module from './module';
import styles from '../views/styles/themes.scss';

if (module.hot) {
  module.hot.accept();
}

console.log(styles);

const MainApp = Module;

// render the app
render(<MainApp />, document.getElementById('container'));
