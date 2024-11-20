import React, { useState, useEffect } from 'react';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Mobile Developer'
];

function RoleRotator() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1500);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <p className='text-white fs-5'>I'm a <span style={{ color: 'orange' }}>{roles[currentRoleIndex]}</span></p>
    </div>
  );
}

export default RoleRotator;
