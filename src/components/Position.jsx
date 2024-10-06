import React, { useEffect, useState } from 'react';

const produceSpans = (text) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className="inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const positions = [
    { text: "Game Developer" },
    { text: "Software Developer" },
    { text: "Game Designer" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prev) => (prev + 1) % positions.length);
    }, 2400); // Change every 2.4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 flex flex-col">
        {positions.map((position, index) => (
          <div
            key={index}
            className={`text absolute left-1 md:left-2 2xl:left-4 flex transition-opacity duration-700 ease-in-out ${index === currentPosition ? 'opacity-100' : 'opacity-0'}`}
            aria-label={position.text}
          >
            {produceSpans(position.text)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Position;
