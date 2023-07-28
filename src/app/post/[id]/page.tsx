import mock from "@/mocks/mock.json";

const PostPage = ({ params }: { params: { id: string } }) => {
  const post = mock.forum.find((post) => post.id === params.id);
  if (!post) return <div className="text-white">Post não encontrado</div>;

  return (
    <div className="w-full bg-gray-200">
      <div dangerouslySetInnerHTML={{ __html: post.descricao }} />
      {post.respostas.map((resposta) => {
        return (
          <div key={`resposta: ${resposta.id}`} className="">
            <p>Autor: {resposta.autor}</p>
            <p>Data: {resposta.data}</p>
            <div dangerouslySetInnerHTML={{ __html: resposta.comentario }} />
          </div>
        );
      })}
    </div>
  );
};

export default PostPage;
