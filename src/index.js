import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GoogleFontLoader from './GoogleFontLoader';
import './reset.css';
import './index.css';

const index = document.getElementById('root');
console.log(index); 
const root = createRoot(container);

root.render(
  <>
    <GoogleFontLoader />
    <App />
  </>
);
export default index;