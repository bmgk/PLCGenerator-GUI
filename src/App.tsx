import React from 'react';
import { render } from 'react-dom';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return <div>Hello World</div>;
};

render(<App />, mainElement);
