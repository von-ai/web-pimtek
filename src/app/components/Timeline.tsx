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
    <section className="pt-28 pb-20">
      <div className="flex justify-center items-center text-primary-blue font-bold text-5xl mb-10">
        TIMELINE PIMTEK 2024
      </div>
      <div className="relative w-full md:w-3/4 mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#D4C4A8]"></div>

        <div className="space-y-12 relative">
          {timeLineData.map((event, index) => (
            <div
              key={event.key}
              className={`flex ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              } relative`}
              style={{ marginTop: '20px' }}
            >
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full z-10"
                style={{ backgroundColor: event.color }}
              ></div>
              <div
                className="w-[503px] h-[172px] rounded-lg shadow-md p-4 flex flex-col justify-center items-center"
                style={{ backgroundColor: event.color }}
              >
                <div className="text-primary-white text-2xl font-bold">
                  {event.tanggal}
                </div>
                <div className="text-primary-white text-2xl font-semibold text-center">
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
