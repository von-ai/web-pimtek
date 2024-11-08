import React from 'react';
import skim from '../utils/SkimData';

type SkimData = {
  key: number;
  skim: string;
  as: string;
  color?: string;
};

const SkimCard = ({
  visibleItems,
  startIndex,
}: {
  visibleItems: number;
  startIndex: number;
}) => {
  return (
    <div className="flex space-x-24 w-auto">
      {skim.slice(startIndex, startIndex + visibleItems).map((item) => (
        <section
          key={item.key}
          className="w-[343px] h-[456px] bg-primary-white rounded-3xl flex flex-col 
              justify-center items-center shrink-0"
        >
          <div
            className="w-[256px] h-[256px] bg-primary-blue flex justify-center items-center rounded-2xl"
            style={{ backgroundColor: item.color }}
          >
            <span className="text-white text-9xl font-bold">{item.as}</span>
          </div>
          <div className="mt-4 text-primary-blue text-4xl font-bold text-center">
            {item.skim}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SkimCard;
