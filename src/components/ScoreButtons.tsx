import React from 'react';

interface Props {
  score: number;
}

const ScoreButtons: React.FC<Props> = ({ score }) => {
  return (
    <div className="flex items-center md:flex-col rounded-lg overflow-clip bg-gray-light w-max max-w-[130px] md:min-w-[40px] md:max-w-[60px] row-start-3 md:row-start-1 md:row-span-2 h-10 md:h-[100px]">
      <button className="w-10 h-10 flex items-center justify-center group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 stroke-current transition duration-100 ease-in-out group-hover:stroke-blue-moderate group-hover:stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <span className="text-blue-moderate font-bold text-center">{score}</span>
      <button className="w-10 h-10 flex items-center justify-center group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-4 h-4 stroke-current transition duration-100 ease-in-out group-hover:stroke-blue-moderate group-hover:stroke-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
    </div>
  );
};

export default ScoreButtons;
