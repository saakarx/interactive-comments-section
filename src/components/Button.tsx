import React from 'react';

interface Props {
  text: string;
  width: string;
  bg: string;
  className?: string;
  handleClick: () => void;
}

const Button: React.FC<Props> = ({
  text,
  width,
  bg,
  className,
  handleClick
}) => {
  return (
    <button
      className={`uppercase h-12 text-white text-sm md:text-base font-medium tracking-wide rounded-lg ${className} hover:bg-opacity-60 ${width} ${bg}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
