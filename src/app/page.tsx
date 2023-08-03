"use client";

import { Post } from "@/components/Post/Post";
import { PostProps } from "@/components/Post/post.type";
import mock from "@/mocks/mock.json";
import { Ad } from "@/components/Ad/ad";
import { useState } from "react";
import { Section } from "@/components/Section/Section";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>(mock.forum);

  return (
    <>
      <div id="main" className="flex flex-col w-full bg-white gap-5">
        <Section title="Bem vindos ao Haunt Seekers">
          <p className="pl-1">
            Caros aventureiros do desconhecido, é com grande prazer que damos as
            boas-vindas a todos vocês no Haunt Seekers 2000, o mais misterioso e
            intrigante fórum dedicado aos assuntos sobrenaturais. Se você é
            fascinado por lendas urbanas, arrepiado por histórias de fantasmas,
            obcecado por fenômenos paranormais ou simplesmente curioso sobre o
            inexplicável, este é o lugar certo para você! Aqui, vamos mergulhar
            nas profundezas do desconhecido, explorar os cantos mais obscuros do
            sobrenatural e compartilhar experiências que desafiam a compreensão
            humana.
          </p>
        </Section>
        <Section title="Últimos posts" categories={true}>
          {posts.map((post: PostProps) => {
            return <Post key={post.id} post={post} />;
          })}
        </Section>
      </div>
      <div id="ads" className="flex flex-col w-96 gap-1 pl-2 pt-2">
        {mock.ads.map((ad, _) => {
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
