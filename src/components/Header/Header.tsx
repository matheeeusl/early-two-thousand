import Image from "next/image";
import React from "react";

export const Header = ({ secret }: { secret: boolean }): JSX.Element => {
  const src = secret ? "/gifs/staring-eyes.gif" : "/gifs/eyes.gif";
  return (
    <header
      className={`flex p-8 ${
        secret ? "bg-secret" : "bg-black"
      } border-b-4 border-b-container`}
    >
      <div className="flex">
        <Image
          src={src}
          alt="Beyond The Veil 2k! left eye"
          width={100}
          height={100}
        />
        <Image
          src={src}
          alt="Beyond The Veil 2k! right eye"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-2xl md:text-7xl font-cursive text-red-600">
        Beyond The Veil 2k!
      </h1>
    </header>
  );
};
