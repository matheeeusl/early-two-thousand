import { useState } from "react";
import { PostProps } from "./post.type";
import { useRouter } from "next/navigation";

export const Post = ({ post }: { post: PostProps }): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <div className="cursor-pointer flex border-2" onClick={handleClick}>
      <div className="text-xs pr-1 border-r-2 text-center min-w-50">Icon</div>
      <div className="flex-1 pl-1 border-r-2">
        <h4>{post.titulo}</h4>
        <p className="text-xs">{post.subtitulo}</p>
      </div>
      <div className="pr-1 border-r-2 min-w-70 text-center">
        {post.respostas.length}
      </div>
      <div className="pr-1 border-r-2 min-w-70">
        <a className="text-xs">By {post.autor.nick ?? post.autor.nome}</a>
        <p className="text-xs">{post.data}</p>
      </div>
    </div>
  );
};
