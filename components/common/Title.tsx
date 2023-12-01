import React from "react";

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-4xl leading-[50px] md:text-5xl md:leading-[60px] lg:text-6xl lg:!leading-[70px] font-semibold">
      {children}
    </h1>
  );
};

interface TitleArticleProps {
  children: string;
}

export const TitleArticle: React.FC<TitleArticleProps> = ({ children }) => {
  return <h1 className="text-2xl font-semibold leading-8 py-3">{children}</h1>;
};
interface TitleSectionProps {
  children: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ children }) => {
  return <h2 className="text-4xl leading-[50px] font-semibold">{children}</h2>;
};

export default Title;
