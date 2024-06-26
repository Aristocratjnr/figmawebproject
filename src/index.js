import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GoogleFontLoader from './GoogleFontLoader';
import './reset.css';
import './index.css';

const  Index = document.getElementById('root');
console.log(Index); 
const root = createRoot(Index);

root.render(
  <>
    <GoogleFontLoader />
    <App />
  </>
);
export default Index;