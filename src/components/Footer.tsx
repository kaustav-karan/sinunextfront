// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} My Next.js Project</p>
    </footer>
  );
};

export default Footer;
