import React, { useEffect, useState } from 'react';

const InnerHeader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assuming mobile width is less than 768 pixels
    };

    handleResize(); // Set initial state based on window width

    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on unmounting
    };
  }, []);

  return (
    <div className='h1margin'>
      <h1>6879 Duties</h1>
      {isMobile && <p>horizontal Scroll for mobile screen</p>}
    </div>
  );
};

export default InnerHeader;
