import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'; // assuming you have reset.min.css saved as reset.css in your project
import './index.css'; // assuming any custom styles would go here

// Load Google Fonts
const loadGoogleFont = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Poppins:400';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

// Load styles on component mount
React.useEffect(() => {
  loadGoogleFont();
}, []);

const App = () => {
  return (
    <div id="app">
      {/* Your app content goes here */}
    </div>
  );
};

// Render the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
