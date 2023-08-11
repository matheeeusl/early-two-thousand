"use client";

import { IPost } from "@/types";

import { useRouter } from "next/navigation";
import Image from "next/image";

export const Post = ({ post }: { post: IPost }): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/post/${post.id}`);
  };

  return (
    <div
      className="cursor-pointer grid grid-cols-12 border-2 border-t-0"
      onClick={handleClick}
    >
      <div className="text-xs border-r-2 flex justify-center">
        <Image src="/icons/ghost.svg" width={20} height={20} alt="ghost icon" />
      </div>
      <div className="flex-1 border-r-2 col-span-9 pl-1">
        <h4>{post.titulo}</h4>
        <p className="text-xs">{post.subtitulo}</p>
      </div>
      <div className="border-r-2 text-center pl-1">{post.respostas.length}</div>
      <div className="border-r-2 pl-1">
        <a className="text-xs">By {post.autor.nick ?? post.autor.nome}</a>
        <p className="text-xs">{post.data}</p>
      </div>
    </div>
  );
};
