import React, { useEffect } from 'react';

const GoogleFontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Poppins:400';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return null;
};

export default GoogleFontLoader;
