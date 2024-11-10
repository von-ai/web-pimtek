import React from 'react';
import timeLineData from '../utils/TimelineData';

type TimelineItem = {
  key: number;
  tanggal: string;
  agenda: string;
  color?: string;
};

const Timeline = () => {
  return (
    <section className="pt-20 sm:pt-28 pb-16 sm:pb-20" id="Timeline">
      <div className="flex justify-center items-center text-primary-blue font-bold text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-10">
        TIMELINE PIMTEK 2024
      </div>
      <div className="relative w-full md:w-3/4 mx-auto px-4 sm:px-0">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#D4C4A8]"></div>

        <div className="space-y-8 sm:space-y-12 relative">
          {timeLineData.map((event, index) => (
            <div
              key={event.key}
              className={`flex ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              } relative`}
            >
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-7 sm:h-7 rounded-full z-10"
                style={{ backgroundColor: event.color }}
              ></div>
              <div
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[503px] h-auto rounded-lg shadow-md p-4 flex flex-col justify-center items-center"
                style={{ backgroundColor: event.color }}
              >
                <div className="text-primary-white text-lg sm:text-xl md:text-2xl font-bold">
                  {event.tanggal}
                </div>
                <div className="text-primary-white text-center text-base sm:text-lg md:text-xl font-semibold">
                  {event.agenda}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
