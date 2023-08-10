import { Res } from "@/components/Resposta/Res";

import { store } from "@/store";
import { Resposta } from "@/types";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const { posts } = store.getState().posts;
  const post = posts.find((post) => post.id === params.id);

  if (!post) return <div className="text-white">Post não encontrado</div>;

  return (
    <div className="w-full bg-gray-200">
      <div dangerouslySetInnerHTML={{ __html: post.descricao }} />
      {post.respostas.map((resposta: Resposta) => {
        return <Res resposta={resposta} key={resposta.id} />;
      })}
    </div>
  );
};

export default PostPage;
