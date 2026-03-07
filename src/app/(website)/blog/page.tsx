import { client} from "@/sanity/lib/client";
import { allPostsQuery } from "@/sanity/lib/queries";
import BlogIndexClient from "@/components/client-page/blog-index-client"

export const revalidate = 60;

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await client.fetch(allPostsQuery);
  } catch {
    posts = [];
  }

  return <BlogIndexClient posts={posts} />;
}