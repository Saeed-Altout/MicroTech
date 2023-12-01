import React from "react";

interface SectionProps {
  children: any | undefined;
  id: string;
  styles?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, styles }) => {
  return (
    <section className={`${styles} py-20`} id={id}>
      {children}
    </section>
  );
};

export default Section;
