import { useState } from "react";
import { PostProps } from "./post.type";
import { useRouter } from "next/navigation";

export const Post = ({ post }: { post: PostProps }): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <div className="m-2 border-black border-4" onClick={handleClick}>
      <div>
        <h2>{post.titulo}</h2>
        <h4>{post.subtitulo}</h4>
      </div>
      <div className="text-xs">
        <p>Autor: {post.autor}</p>
        <p>Data: {post.data}</p>
      </div>
    </div>
  );
};
