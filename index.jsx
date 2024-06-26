import React from 'react';
import ReactDOM from 'react-dom';
import GoogleFontLoader from './GoogleFontLoader';
import './reset.css'; // Assuming the reset styles are saved as reset.css
import './index.css'; // Any custom styles
import './global.css'; // Any global styles

const App = () => {
  return (
    <div id="app">
      {/* Your app content goes here */}
    </div>
  );
};

// Render the App component to the DOM
ReactDOM.render(
  <>
    <GoogleFontLoader />
    <App />
  </>,
  document.getElementById('root')
);
