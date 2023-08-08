import { Resposta } from "@/types";

export const Res = ({
  resposta,
}: {
  resposta: Resposta;
}): React.ReactElement => {
  return (
    <div className="w-full bg-gray-200">
      <p>Autor: {resposta.autor.nick ?? resposta.autor.nome}</p>
      <p>Data: {resposta.data}</p>
      <div dangerouslySetInnerHTML={{ __html: resposta.comentario }} />
    </div>
  );
};
