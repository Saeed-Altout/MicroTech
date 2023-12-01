import React from "react";

interface DescraptionProps {
  children: string;
}

const Descraption: React.FC<DescraptionProps> = ({ children }) => {
  return (
    <h1 className="leading-8 font-medium tracking-wide md:font-semibold text-neutral-700">
      {children}
    </h1>
  );
};

export default Descraption;
