//Import the React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  return (
    <div>
    <label className="label" for="name">
      {labelText}
          </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {buttonText.text}
    </button>
  </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));