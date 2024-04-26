import React from "react";
import Image from "next/image";

interface ICard {
  src: string;
  title: string;
  description: string;
  rightImage: boolean;
}
const Card = ({ src, title, description, rightImage }: ICard) => {
  return (
    <div className="flex justify-center items-center py-28">
      <div className="w-full flex">
        {!rightImage && (
          <div className="w-2/3 flex items-center justify-center">
            <Image src={src} alt={"hand"} width={200} height={200} />
          </div>
        )}

        <div className="flex flex-col justify-center w-2/3  items-start pl-20">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-5xl">{title}</h2>
            <p className="text-white text-2xl leading-relaxed">{description}</p>
          </div>
        </div>

        {rightImage && (
          <div className="w-2/3 flex items-center justify-center">
            <Image src={src} alt={"hand"} width={200} height={200} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
