import { Resposta } from "@/types";
import { Assinatura } from "@/components/Assinatura/Assinatura";
import Image from "next/image";
import { getAutorDataById } from "@/functions/get-autor-data-by-id";

export const Res = ({
  resposta,
}: {
  resposta: Resposta;
}): React.ReactElement => {
  const autor = getAutorDataById(resposta.autor);

  return (
    <div className="w-full bg-gray-200 border-b-2 border-gray-300 px-4 py-2 flex">
      <div className="w-[80px] mr-2">
        <Image
          src={autor?.foto || "/images/scream.png"}
          width={120}
          height={120}
          alt={`avatar de ${autor?.nick ?? autor?.nome}`}
          className="max-w-[80px] max-h-[120px]"
        />
      </div>
      <div>
        <p className="text-xs mb-2">{resposta.data}</p>
        <b>{autor?.nick ?? autor?.nome}:</b>
        <div dangerouslySetInnerHTML={{ __html: resposta.comentario }} />

        {autor?.assinatura && <Assinatura assinatura={autor.assinatura} />}
      </div>
    </div>
  );
};
