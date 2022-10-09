import React from 'react';

interface Props {
  text: string;
  children?: React.ReactNode;
  red?: boolean;
}

const CommentButton: React.FC<Props> = ({ children, text, red }) => {
  return (
    <button
      className={`font-bold flex items-center gap-2 pl-2 ${
        red ? 'text-red-soft' : 'text-blue-moderate'
      } hover:opacity-60`}
    >
      {children}
      {text}
    </button>
  );
};

export default CommentButton;
