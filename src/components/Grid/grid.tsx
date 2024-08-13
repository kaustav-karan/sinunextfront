import React from 'react';
import Image from 'next/image';

interface GridProps {
  image1: string;
  image2: string;
  slogan1: string;
  slogan2: string;
}

const Grid: React.FC<GridProps> = ({ image1, image2, slogan1, slogan2 }) => {
  return (
    <div className="mx-auto my-1" style={{ maxWidth: '70vw' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] p-6 mx-[5px] lg:mx-[5px]">
        <div className="relative flex items-center justify-center rounded-2xl lg:max-h-[39vh] shadow-md dark:shadow-gray-700" style={{ height: '39vh' }}>
          <Image src={image1} alt="Item 1" fill className="object-cover rounded-2xl" />
        </div>
        <div className="flex items-center justify-center text-center rounded-2xl lg:max-h-[39vh] shadow-md dark:shadow-gray-700">
          <p className='my-3'>{slogan1}</p>
        </div>
        <div className="relative flex items-center justify-center rounded-2xl lg:max-h-[39vh] shadow-md dark:shadow-gray-700" style={{ height: '39vh' }}>
          <Image src={image2} alt="Item 4" fill className="object-cover rounded-2xl" />
        </div>
        <div className="flex items-center justify-center text-center rounded-2xl lg:max-h-[39vh] shadow-md dark:shadow-gray-700">
          <p className='my-3'>{slogan2}</p>
        </div>
      </div>
    </div>
  );
};

export default Grid;
