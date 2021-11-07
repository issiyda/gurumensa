import React from 'react';
import { useNavigate } from 'react-router';
const Navigation = () => {
  const navigate = useNavigate();

  const onNavClick = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <button onClick={() => onNavClick('/')}>Home</button>
      <button onClick={() => onNavClick('/search')}>Search</button>
    </div>
  );
};

export default Navigation;
