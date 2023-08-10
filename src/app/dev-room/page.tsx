"use client";

import { Registro } from "@/components/Registro/Registro";
import { store } from "@/store";
import Image from "next/image";

const DevRoom = (): React.ReactElement => {
  const { registros } = store.getState().registro;

  return (
    <div className="w-full bg-gray-200">
      <div className="flex justify-between">
        <Image
          src="/gifs/saxophone.gif"
          width={120}
          height={50}
          alt="saxophone"
        />
        <Image
          src="/gifs/dancing-skeleton.gif"
          width={120}
          height={50}
          alt="dancing"
        />
        <Image
          src="/gifs/dancing-80.gif"
          width={120}
          height={50}
          alt="dancing 80s"
        />
        <Image
          src="/gifs/dancing-skeletons.gif"
          width={120}
          height={50}
          alt="dancing skeletons"
        />
        <Image
          src="/gifs/dancing-will.gif"
          width={120}
          height={50}
          alt="dancing will"
        />
        <Image src="/gifs/gameboy.gif" width={120} height={50} alt="gameboy" />
      </div>
      <h1 className="mt-2 font-cursive text-center">DEV ROOM!</h1>
      <div className="mt-2">
        {registros.map((registro, index) => {
          return (
            <div key={registro.data + index}>
              <Registro registro={registro} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevRoom;
