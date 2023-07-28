"use client";

import { Post } from "@/components/Post/Post";
import { PostProps } from "@/components/Post/post.type";
import mock from "@/mocks/mock.json";
import { Ad } from "@/components/Ad/ad";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<PostProps[]>(mock.forum);

  return (
    <>
      <div id="posts" className="w-full bg-gray-200 p-4">
        {posts.map((post: PostProps) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
      <div id="ads" className="flex flex-col w-96 gap-1">
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
