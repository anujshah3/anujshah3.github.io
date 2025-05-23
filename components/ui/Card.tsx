
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card;
