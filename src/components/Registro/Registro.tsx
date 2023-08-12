import { IRegistro } from "@/types";
import Image from "next/image";
import { useState } from "react";

export const Registro = ({
  registro,
}: {
  registro: IRegistro;
}): React.ReactElement => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="w-full border-b-2 border-black pb-2">
      <button
        className="flex gap-2 items-center"
        onClick={() => setDisplay(!display)}
      >
        <Image
          src="/icons/calendar.svg"
          width={30}
          height={30}
          alt="calendar icon"
        />
        <h3>{registro.data}</h3>
      </button>
      {display && registro.conteudo.length > 0 && (
        <div className="pl-3 pt-2">
          {registro.conteudo.map((paragraph, index) => {
            return (
              <p key={registro.data + index} className="mb-2">
                {paragraph}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
