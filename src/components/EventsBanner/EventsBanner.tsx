{/* Optional: Logo Section */}
        {/* <div className="flex justify-start md:justify-between items-center mt-1 md:mt-1">
          <div className="flex items-center ml-4 md:ml-12 mb-7">
            <span
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-400"} mr-2`}
            >
              Powered by
            </span>
            <Image
              src={logo}
              alt="sinu logo"
              className="h-8"
              height={24}
              width={100}
            />
          </div>
        </div> */}import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import PulsatingButton from "../ui/pulsatingbutton";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/components/Redux/store";

interface EventsBannerProps {
  lightImage?: string;
  darkImage?: string;
  logo?: string;
  rightImage?: string;
}

const EventsBanner = ({
  lightImage = "/events/hackathon-35vh.jpg",
  darkImage = "/events/hackathon-35vh.jpg",
  logo = "/events/Hive Pen.png",
  rightImage = "/events/3D_illustrations-removebg-preview.png",
}: EventsBannerProps) => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  // Fetch eventData from Redux
  const eventData = useSelector((state: RootState) => state.event.eventData);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const bannerImage = isDark ? darkImage : lightImage;
  const bannerStyle = bannerImage
    ? {
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: isDark ? "black" : "white" };

  const getImageUrl = (fileName: string) =>
    `https://api.sinusoid.in/images/${fileName}`;
  const rightImageUrl = eventData?.imageAsset?.eventBannerComponent?.imgUrl
    ? getImageUrl(eventData.imageAsset.eventBannerComponent.imgUrl)
    : rightImage;

  const handleButtonClick = () => {
    if (eventData?.status === "registrations") {
      if (eventData?.eventMode === "unstop" && eventData?.eventRedirectUrl) {
        const externalUrl = eventData.eventRedirectUrl.startsWith("http")
          ? eventData.eventRedirectUrl
          : `https://${eventData.eventRedirectUrl}`;
        window.location.href = externalUrl;
      } else if (
        eventData?.eventMode === "offline" ||
        eventData?.eventMode === "online"
      ) {
        router.push(`/events/${eventData?.eventId}/register`);
      }
    }
  };

  const getButtonContent = () => {
    switch (eventData?.status) {
      case "upcoming":
        return { text: "Coming Soon", disabled: true };
      case "registrations":
        return { text: "Register Here", disabled: false };
      case "ongoing":
        return { text: "Registration Closed", disabled: true };
      case "ended":
        return { text: "Event Ended", disabled: true };
      default:
        return { text: "Unknown Status", disabled: true };
    }
  };

  const { text, disabled } = getButtonContent();

  return (
    <div className="relative w-full overflow-hidden my-20">
      <div
        className="w-[90%] md:w-[80%] h-[45vh] md:h-[40vh] flex flex-col justify-center pl-4 md:pl-12 text-left mx-auto rounded-lg overflow-hidden"
        style={bannerStyle}
      >
        <div className="relative z-10 p-4 md:p-8 py-4 flex flex-col md:flex-row h-[90%] justify-between items-start md:items-center">
          <div className="flex flex-col h-full justify-center w-full md:w-3/5">
            <h2
              className={`text-2xl md:text-2xl font-bold mb-4 leading-tight ${
                isDark ? "text-white" : "text-white"
              }`}
            >
              {eventData?.eventName}
            </h2>
            <p
              className={`text-sm md:text-lg mb-4 leading-tight ${
                isDark ? "text-gray-200" : "text-white"
              }`}
            >
              {eventData?.eventTagline}
            </p>
            <div className="flex flex-col md:flex-row md:items-start mb-4">
              <div className="flex flex-row text-base md:text-md mb-2 md:mb-0 md:mr-4">
                <div className="mr-4">
                  <p
                    className={`${
                      isDark ? "text-gray-200" : "text-gray-200"
                    } leading-tight`}
                  >
                    Start Date:
                  </p>
                  <p
                    className={`${
                      isDark ? "text-gray-200" : "text-gray-200"
                    } leading-tight`}
                  >
                    <strong>
                      {dayjs(eventData?.schedule?.eventStart).format(
                        "dddd, MMMM D, YYYY"
                      )}
                    </strong>
                  </p>
                </div>
                <div className="ml-4">
                  <p
                    className={`${
                      isDark ? "text-gray-200" : "text-gray-200"
                    } leading-tight`}
                  >
                    End Date:
                  </p>
                  <p
                    className={`${
                      isDark ? "text-gray-200" : "text-gray-200"
                    } leading-tight`}
                  >
                    <strong>
                      {dayjs(eventData?.schedule?.eventEnd).format(
                        "dddd, MMMM D, YYYY"
                      )}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-60 flex justify-center">
              <PulsatingButton
                text={text}
                onClick={handleButtonClick}
                disabled={disabled}
              />
            </div>
          </div>
          <div className="mt-6 ml-auto hidden lg:block">
            <Image
              src={rightImageUrl}
              alt="Event illustration"
              className="rounded-lg transform -translate-y-3 -translate-x-12"
              width={200}
              height={100}
            />
          </div>
        </div>

        {/* Optional: Logo Section */}
        {/* <div className="flex justify-start md:justify-between items-center mt-1 md:mt-1">
          <div className="flex items-center ml-4 md:ml-12 mb-7">
            <span
              className={`text-sm ${isDark ? "text-gray-400" : "text-gray-400"} mr-2`}
            >
              Powered by
            </span>
            <Image
              src={logo}
              alt="sinu logo"
              className="h-8"
              height={24}
              width={100}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EventsBanner;
