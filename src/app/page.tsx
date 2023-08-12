import { Post } from "@/components/Post/Post";
import { AdProps, IPost } from "@/types";
import { Ad } from "@/components/Ad/ad";
import { Section } from "@/components/Section/Section";

import { store } from "@/store";

import { WelcomePost } from "@/components/WelcomePost/WelcomePost";
import { orderPosts } from "@/functions/order-posts";

export default async function Home() {
  const { posts } = store.getState().posts;
  const { ads } = store.getState().ads;
  const orderedPosts = await orderPosts(posts);
  return (
    <>
      <div id="main" className="flex flex-col w-full bg-white gap-5">
        <Section title="Bem vindos ao BeyondTheVeil2k!" styles="font-mono">
          <WelcomePost />
        </Section>
        <Section title="Últimos posts" categories={true}>
          {orderedPosts.map((post: IPost) => {
            return <Post key={post.id} post={post} />;
          })}
        </Section>
      </div>
      <div id="ads" className="flex flex-col w-96 gap-1 pl-2 pt-2">
        {ads.map((ad: AdProps, _: number) => {
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
