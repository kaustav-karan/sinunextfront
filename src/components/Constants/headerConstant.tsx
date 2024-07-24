// src/components/Constants/header_cons.tsx
import React from "react";
import Link from "next/link";
import { FaInfoCircle, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";

export const navLinkArray = [
  { href: "/about", text: "About", icon: <FaInfoCircle /> },
  { href: "/events", text: "Events", icon: <FaCalendarAlt /> },
  { href: "/sponsors", text: "Sponsors", icon: <FaHandsHelping />, hoverCardSize: "w-24" }, // Adjust hover card size here
];

const iconClassName = "text-current"; // This will make the color dynamic

export const NavLinks: React.FC = () => (
  <div className="hidden lg:flex space-x-4 px-4">
    {navLinkArray.map((navLink, idx) => (
      <HoverCard key={`navlink_${idx}`}>
        <HoverCardTrigger asChild>
          <Link href={navLink.href}>
            <div className={`p-2 ${iconClassName} dark:text-[#FADAC1]`}>
              {navLink.icon}
            </div>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className={navLink.hoverCardSize ? navLink.hoverCardSize : "w-20"}>
          <div className="text-center">{navLink.text}</div>
        </HoverCardContent>
      </HoverCard>
    ))}
  </div>
);

export const MobileNavLinks: React.FC = () => (
  <div className="lg:hidden mt-2 space-y-2">
    {navLinkArray.map((navLink, idx) => (
      <Link key={`navlink_${idx}`} href={navLink.href}>
        <div className="flex items-center p-3 bg-gray-200 dark:bg-gray-800 rounded">
          <div className={`mr-2 ${iconClassName} dark:text-[#FADAC1]`}>{navLink.icon}</div>
          <span className="text-black dark:text-[#FADAC1]">{navLink.text}</span>
        </div>
      </Link>
    ))}
  </div>
);

export default NavLinks;