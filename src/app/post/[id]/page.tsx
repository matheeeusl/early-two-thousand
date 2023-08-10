import { Assinatura } from "@/components/Assinatura/Assinatura";
import { Res } from "@/components/Resposta/Res";
import { Section } from "@/components/Section/Section";

import { store } from "@/store";
import { Resposta } from "@/types";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { posts } = store.getState().posts;
  const post = posts.find((post) => post.id === params.id);

  if (!post) return <div className="text-white">Post não encontrado</div>;

  return (
    <div className="w-full bg-gray-200">
      <Section title={post.titulo}>
        <div className="p-6">
          <div dangerouslySetInnerHTML={{ __html: post.descricao }} />
          {post.autor.assinatura && (
            <Assinatura assinatura={post.autor.assinatura} />
          )}
        </div>
      </Section>
      <Section title="Respostas">
        {post.respostas.map((resposta: Resposta) => {
          return <Res resposta={resposta} key={resposta.id} />;
        })}
      </Section>
    </div>
  );
};

export default PostPage;
