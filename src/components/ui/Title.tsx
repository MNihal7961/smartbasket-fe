import React from "react";

interface TitleProps {
  title: string;
  align: "text-center" | "text-start" | "text-end";
}

const Title: React.FC<TitleProps> = ({ align, title }) => {
  return (
    <h1
      className={`${align} text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900`}
    >
      {title}
    </h1>
  );
};

export default Title;
