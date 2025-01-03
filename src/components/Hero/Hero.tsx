import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Banner30vh/banner";

interface HeroProps {
  defaultLightImg?: string;
  defaultDarkImg?: string;
  lightbannerImageSrc?: string;
  darkbannerImageSrc?: string;
  lightbannerVideoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  defaultLightImg = "/images/light.jpg",
  defaultDarkImg = "/images/dark.jpg",
  lightbannerImageSrc = "/images/caset_light.webp", // Light mode image
  darkbannerImageSrc = "/images/caset_dark.webp", // Dark mode image
  lightbannerVideoSrc = "/heroVideo/mainHeroVid.mp4",
}) => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [currentLightImg, setCurrentLightImg] = useState(lightbannerImageSrc);
  const [currentDarkImg, setCurrentDarkImg] = useState(darkbannerImageSrc);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const handleLightImageError = () => {
    setCurrentLightImg(defaultLightImg);
  };

  const handleDarkImageError = () => {
    setCurrentDarkImg(defaultDarkImg);
  };

  const bannerImage = isDark ? currentDarkImg : currentLightImg;

  const logoSrc = isDark
    ? "/events/Dark30vh.png" // Dark mode logo
    : "/events/Light30vh.png"; // Light mode logo

  return (
    <div className="w-full h-screen p-0 m-0 mt-16">
      <div className="w-full h-[70vh] flex items-center justify-center relative overflow-hidden">
        {/* Video background */}
        <video
          src={lightbannerVideoSrc}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        {/* Background image */}
        <Image
          src={bannerImage}
          alt="Banner Background Image"
          layout="fill"
          quality={100}
          priority
          onError={isDark ? handleDarkImageError : handleLightImageError}
          className="object-contain z-20"
        />
      </div>
      <Banner />
      {/* <Link href="/events/hiveWeb3Hackathon">
        <div className="relative flex justify-center items-center w-full h-[30vh] mt-2">
          <Image
            src={isDark ? "/events/Dark.svg" : "/events/Light.svg"}
            alt="Theme Specific Logo"
            layout="fill"
            objectFit="fill"
            className=""
          />
        </div>
      </Link> */}
    </div>
  );
};

export default Hero;
