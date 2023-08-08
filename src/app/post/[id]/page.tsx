import { Res } from "@/components/Resposta/Res";
import { Resposta } from "@/types";

const PostPage = async ({ params }: { params: { id: string } }) => {
  const req = await fetch(`http://localhost:3000/api/search?id=${params.id}`);
  const post = await req.json();
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
