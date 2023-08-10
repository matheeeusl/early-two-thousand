"use client";

import { useState } from "react";
import { Assinatura } from "@/components/Assinatura/Assinatura";

export const WelcomePost = (): React.ReactElement => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <button className="w-full p-0 m-0" onClick={() => setShowMore(!showMore)}>
        <p className="text-xs text-right p-0 m-0">{showMore ? "[-]" : "[+]"}</p>
      </button>
      <p className="pl-1 pb-4">
        Bem-vindos, <b>bravos</b> exploradores das sombras e dos segredos{" "}
        <b>ocultos</b>, a este <b>recanto</b> misterioso da internet. Aqui nós
        iremos <b>mergulhar</b> com <b>coragem</b> em um oceano{" "}
        <b>traiçoeiro</b> cheio de mistério, <b>maldade</b> e enigmas que
        desafiam a <b>lógica</b> e transcendem as barreiras do conhecimento
        convencional.
      </p>
      {showMore && (
        <div>
          <p className="pl-1 pb-4">
            Em tempos de incertezas e <b>dúvidas</b> reunimos aqui <b>almas</b>{" "}
            corajosas, <b>sedentas por</b> desvendar os <b>véus</b> do{" "}
            <b>sobrenatural</b>. <b>Não</b> estamos sozinhos nessa jornada.
            Desde os primórdios da <b>humanidade</b>, histórias de <b>magia</b>,
            fantasmas <b>e</b> entidades <b>demoníacas</b> têm circulado em{" "}
            <b>sussurros</b> e lendas <b>que</b> resistem ao tempo.
          </p>
          <p className="pl-1 pb-4">
            Preparem-se para desvendar <b>casos</b> inexplicáveis,{" "}
            <b>investigar</b> conspirações que se escondem nas <b>sombras</b>,
            explorar o <b>desconhecido</b> e participar da <b>luta</b> contra o{" "}
            <b>senso</b> comum, <b>onde</b> extraterrestres podem cruzar{" "}
            <b>os</b> céus e criaturas inimagináveis <b>espreitam</b> na
            escuridão. Aqui, os limites entre o <b>real</b> e o sobrenatural se
            dissipam, e <b>o impossível</b> ganha vida e nos <b>cura</b> de uma
            mente fechada.
          </p>
          <p className="pl-1 pb-4">
            <b>Permitam</b> que <b>o</b> mistério os <b>guie</b>. Compartilhem
            suas experiências, descubram <b>novas</b> perspectivas e desafiem os
            paradigmas da sociedade. <b>Lembrem-se</b> de que <b>estamos</b> em
            busca da <b>verdade</b>, não importa o quão <b>estranha</b> ela
            possa parecer.
          </p>
          <p className="pl-1 pb-4">
            Respeito e <b>curiosidade</b> devem <b>ser</b> nossas <b>guias</b>{" "}
            nesta jornada. Lembrem-se de que, mesmo <b>nos</b> abismos mais
            sombrios, a <b>luz</b> do <b>conhecimento</b> pode nos guiar,{" "}
            <b>contudo</b> ela pode <b>cegar</b>, não <b>confiem</b> cegamente
            nela nem <b>naquele</b> que a segue sem questionar.
          </p>
          <p className="pl-1 pb-4">
            No entanto, <b>advirto</b> a todos que, nessa <b>sua</b> busca
            incessante por respostas, <b>devemos</b> proceder com <b>cautela</b>
            . <b>Nem</b> todos os mistérios <b>estão</b> destinados a{" "}
            <b>serem</b> revelados, e algumas <b>respostas</b> podem trazer mais{" "}
            <b>perguntas</b>.
          </p>
          <p className="pl-1 pb-4">
            Portanto, <b>unam-se</b> como uma <b>comunidade</b> de{" "}
            <b>busca incansável</b>, trocando conhecimento e <b>experiências</b>
            , sempre com a <b>mente aberta</b> para o desconhecido.
          </p>
          <p className="pl-1 pb-4">
            Estejam avisados, <b>exploradores</b> do desconhecido, que as águas{" "}
            <b>nas</b> quais navegaremos não é <b>pura</b>, elas são{" "}
            <b>profundas</b> e traiçoeiras. Mas juntos, <b>enfrentaremos</b> as{" "}
            <b>marés</b> das incertezas e nos <b>fortaleceremos.</b>
          </p>
          <p className="pl-1 pb-4">
            O destino nos <b>guiou</b> a este lugar <b>para</b> nos{" "}
            <b>encontrarmos, compartilharmos</b> e aprendermos. Seja bem-vindo a
            esta jornada sombria e <b>emocionante.</b> O mistério aguarda{" "}
            <b>por</b> todos nós.
          </p>

          <p className="text-sm">26/07/2001</p>
          <Assinatura
            assinatura="<b>If its HELP you
            seek, ask for it.</b>
            <p>L0ck3DxDeVxR00m - Admin</p>"
          />
        </div>
      )}
    </div>
  );
};
