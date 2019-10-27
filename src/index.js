import React from 'react';
import ReactDOM from 'react-dom';

const main = () => {
  const hello = React.createElement('div', {}, 'Hello');
  const elt = document.getElementById('root');
  ReactDOM.render(hello, elt);
};
window.addEventListener('load', main);
