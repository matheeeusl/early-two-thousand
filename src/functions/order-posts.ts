import { IPost } from "@/types";

export const orderPosts = (posts: IPost[]) => {
  const orderedPosts = posts.slice().sort((a, b) => {
    return Number(b.id) - Number(a.id);
  });

  return orderedPosts;
};
