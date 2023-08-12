"use client";

import { Registro } from "@/components/Registro/Registro";
import { store } from "@/store";
import Image from "next/image";
import { useState } from "react";

const DevRoom = (): React.ReactElement => {
  const { registros } = store.getState().registro;
  const { relatorios } = store.getState().relatorios;
  const [showJournal, setShowJournal] = useState(true);
  const [showFiles, setShowFiles] = useState(false);

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
      <div className="mt-4 flex bg-gray-300">
        <div className="hover:bg-gray-200 pr-4">
          <button
            onClick={() => {
              setShowJournal(true);
              setShowFiles(false);
            }}
            className="flex items-center gap-4"
          >
            <Image
              src="/icons/calendar.svg"
              width={30}
              height={30}
              alt="Journal"
            />
            Diário
          </button>
        </div>
        <div className="hover:bg-gray-200 pr-4">
          <button
            onClick={() => {
              setShowJournal(false);
              setShowFiles(true);
            }}
            className="flex items-center gap-4"
          >
            <Image src="/icons/folder.png" width={30} height={30} alt="Files" />
            Relatórios
          </button>
        </div>
      </div>
      {showJournal && (
        <div className="mt-6">
          {registros.map((registro, index) => {
            return (
              <div key={registro.data + index}>
                <Registro registro={registro} />
              </div>
            );
          })}
        </div>
      )}
      {showFiles && (
        <div className="mt-6">
          <div className="text-center">
            <h1 className="mb-4 font-cursive">Relatório dos usuários</h1>
            <h5 className="font-cursive">
              Estava entediado então comecei a anotar características de alguns
              usuários do fórum.
            </h5>
          </div>
          {relatorios.map((relatorio, index) => {
            const registro = {
              data: relatorio.nome,
              conteudo: relatorio.relatorio,
            };
            return (
              <div key={relatorio.nome + index}>
                <Registro registro={registro} iconSrc="/icons/folder.png" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DevRoom;
