import React from 'react';
import Card from './Card';

const Tour = ({ tours, removeTour }) => {
  return (
    <div className='flex justify-center items-center flex-col'>

      <div>
      <h2 className='text-5xl text-black font-bold border-dashed border-black border-4 m-[6vh] rounded-lg px-[3vw] py-[1vh]'>
        Let's Tour with Me
      </h2>

      </div>
      <div className='flex justify-center items-start flex-wrap lg:max-w-[1300px]'>
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour} key={tour.id} />;
        })}
      </div>
    </div>
  );
};

export default Tour;

