import { Assinatura } from "@/components/Assinatura/Assinatura";
import { Res } from "@/components/Resposta/Res";
import { Section } from "@/components/Section/Section";
import { getAutorDataById } from "@/functions/get-autor-data-by-id";

import { store } from "@/store";
import { Resposta } from "@/types";
import Image from "next/image";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { posts } = store.getState().posts;
  const post = posts.find((post) => post.id === params.id);

  if (!post) return <div className="text-white">Post não encontrado</div>;

  const autor = getAutorDataById(post.autor);

  return (
    <div className="w-full bg-gray-200">
      <Section title={post.titulo}>
        <div className="flex">
          <div className="p-4 border-black border-r-2">
            <Image
              src={autor?.foto || "/images/scream.svg"}
              width={600}
              height={100}
              alt={`Avatar de ${autor?.nick}`}
            />
            <p className="mt-4 font-cursive">{autor?.nick}</p>
            <p className="font-cursive">{post.data}</p>
          </div>
          <div>
            <div className="p-6">
              <div dangerouslySetInnerHTML={{ __html: post.descricao }} />
            </div>
            <div className="pb-6">
              {autor?.assinatura && (
                <Assinatura assinatura={autor?.assinatura} />
              )}
            </div>
          </div>
        </div>
      </Section>
      <Section title="Comentários">
        {post.respostas.map((resposta: Resposta) => {
          return <Res resposta={resposta} key={resposta.id} />;
        })}
      </Section>
    </div>
  );
};

export default PostPage;
