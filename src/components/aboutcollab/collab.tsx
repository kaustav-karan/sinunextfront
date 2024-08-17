import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type CollaborationSectionProps = {
  imageSrc: string;
  text: string;
};

const CollaborationSection: React.FC<CollaborationSectionProps> = ({ imageSrc, text }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative min-h-[70vh] dark:bg-black bg-white flex items-center justify-center p-6">
      <div className="relative flex-1 p-8 flex flex-col justify-between dark:bg-zinc-950 bg-zinc-200 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="dark:text-white text-black text-3xl md:text-5xl font-bold mb-6 text-center">
          History of siNUsoid
        </h3>
        <div className="flex flex-col mt-12 md:flex-row justify-center items-center gap-12 md:gap-16">
        <Image
              src={imageSrc}
              alt="Collaboration Logo"
              width={250}
              height={300}
              className="object-cover"
            />
          <div className="p-4 text-center md:text-left dark:text-white text-black max-w-md ml-14">
            <p className="text-md  md:text-xl">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ICollab: React.FC = () => {
  return (
    <div>
      <CollaborationSection
        imageSrc="/logo/logo.png"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default ICollab;