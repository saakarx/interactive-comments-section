import React from 'react';

import { MinusIcon, PlusIcon } from './icons';

type Props = {
  score: number;
};

const ScoreButtons: React.FC<Props> = ({ score }) => {
  return (
    <div className="flex items-center md:flex-col rounded-lg overflow-clip bg-gray-light w-max max-w-[130px] md:min-w-[40px] md:max-w-[60px] row-start-3 md:row-start-1 md:row-span-2 h-10 md:h-[100px] border-0 border-emerald-400 p-0.5">
      <button className="w-9 h-9 flex items-center justify-center hover:text-blue-moderate rounded-md hover:bg-gray-veryLight/60 transition duration-150 ease-in-out">
        <PlusIcon className="fill-current transition duration-100 ease-in-out" />
      </button>
      <span className="text-blue-moderate font-bold text-center">{score}</span>
      <button className="w-9 h-9 flex items-center justify-center hover:text-blue-moderate rounded-md hover:bg-gray-veryLight/60 transition duration-150 ease-in-out">
        <MinusIcon className="fill-current transition duration-100 ease-in-out" />
      </button>
    </div>
  );
};

export default ScoreButtons;
