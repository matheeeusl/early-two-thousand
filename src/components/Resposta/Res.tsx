import { Resposta } from "@/types";
import { Assinatura } from "@/components/Assinatura/Assinatura";
import Image from "next/image";

export const Res = ({
  resposta,
}: {
  resposta: Resposta;
}): React.ReactElement => {
  return (
    <div className="w-full bg-gray-200 border-b-2 border-gray-300 p-4 flex">
      <div className="w-auto mr-2">
        {resposta.autor.foto && (
          <Image
            src={resposta.autor.foto}
            width={50}
            height={50}
            alt={`avatar de ${resposta.autor.nick ?? resposta.autor.nome}`}
          />
        )}
      </div>
      <div>
        <b>{resposta.autor.nick ?? resposta.autor.nome}:</b>
        <div dangerouslySetInnerHTML={{ __html: resposta.comentario }} />

        <p className="text-xs mt-4 mb-2">{resposta.data}</p>
        {resposta.autor.assinatura && (
          <Assinatura assinatura={resposta.autor.assinatura} />
        )}
      </div>
    </div>
  );
};
