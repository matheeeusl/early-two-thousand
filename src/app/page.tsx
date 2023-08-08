import { Post } from "@/components/Post/Post";
import { AdProps, IPost } from "@/types";
import mock from "@/mocks/mock.json";
import { Ad } from "@/components/Ad/ad";
import { Section } from "@/components/Section/Section";

import { store } from "@/store";
import { setStartupPost } from "@/store/searchSlice";
import { API_URL } from "@/constants/api-url";

export default async function Home() {
  const reqPosts = await fetch(`${API_URL}/api/search`);
  const reqAds = await fetch(`${API_URL}/api/ads`);
  const posts = await reqPosts.json();
  const ads = await reqAds.json();

  store.dispatch(setStartupPost(posts));
  return (
    <>
      <div id="main" className="flex flex-col w-full bg-white gap-5">
        <Section title="Bem vindos ao BeyondTheVeil2k!">
          <p className="pl-1">
            Bem-vindos, <b>bravos</b> exploradores das sombras e dos segredos{" "}
            <b>ocultos</b>, a este <b>recanto</b> misterioso da internet. Aqui
            nós iremos <b>mergulhar</b> com <b>coragem</b> em um oceano{" "}
            <b>traiçoeiro</b> cheio de mistério, <b>maldade</b> e enigmas que
            desafiam a <b>lógica</b> e transcendem as barreiras do conhecimento
            convencional.
          </p>
          <p className="pl-1">
            Em tempos de incertezas e <b>dúvidas</b> reunimos aqui <b>almas</b>{" "}
            corajosas, <b>sedentas por</b> desvendar os <b>véus</b> do{" "}
            <b>sobrenatural</b>. <b>Não</b> estamos sozinhos nessa jornada.
            Desde os primórdios da <b>humanidade</b>, histórias de <b>magia</b>,
            fantasmas <b>e</b> entidades <b>demoníacas</b> têm circulado em{" "}
            <b>sussurros</b> e lendas <b>que</b> resistem ao tempo.
          </p>
          <p className="pl-1">
            Preparem-se para desvendar <b>casos</b> inexplicáveis, investigar
            conspirações que se escondem nas sombras, explorar o desconhecido e
            participar da luta contra o senso comum, onde extraterrestres podem
            cruzar os céus e criaturas inimagináveis espreitam na escuridão.
            Aqui, os limites entre o real e o sobrenatural se dissipam, e o
            impossível ganha vida e nos cura de uma mente fechada. Permitam que
            o mistério os guie. Compartilhem suas experiências, descubram novas
            perspectivas e desafiem os paradigmas da sociedade. Lembrem-se de
            que estamos em busca da verdade, não importa o quão estranha ela
            possa parecer. Respeito e curiosidade devem ser nossas guias nesta
            jornada. Lembrem-se de que, mesmo nos abismos mais sombrios, a luz
            do conhecimento pode nos guiar, contudo ela pode cegar, não confiem
            cegamente nela nem naquele que a segue sem questionar. No entanto,
            advirto a todos que, nessa sua busca incessante por respostas,
            devemos proceder com cautela. Nem todos os mistérios estão
            destinados a serem revelados, e algumas respostas podem trazer mais
            perguntas. Portanto, unam-se como uma comunidade de busca
            incansável, trocando conhecimento e experiências, sempre com a mente
            aberta para o desconhecido. Estejam avisados, exploradores do
            desconhecido, que as águas nas quais navegaremos não é pura, elas
            são profundas e traiçoeiras. Mas juntos, enfrentaremos as marés das
            incertezas e nos fortaleceremos. O destino nos guiou a este lugar
            para nos encontrarmos, compartilharmos e aprendermos. Seja bem-vindo
            a esta jornada sombria e emocionante. O mistério aguarda por todos
            nós. If its HELP you seek, ask for it. L0ck3DxDeVxR00m - Admin
          </p>
        </Section>
        <Section title="Últimos posts" categories={true}>
          {posts.map((post: IPost) => {
            return <Post key={post.id} post={post} />;
          })}
        </Section>
      </div>
      <div id="ads" className="flex flex-col w-96 gap-1 pl-2 pt-2">
        {ads.map((ad: AdProps, _: number) => {
          return (
            <div key={`ad: ${ad.alt} - ${_}`}>
              <Ad ad={ad} />
            </div>
          );
        })}
      </div>
    </>
  );
}
