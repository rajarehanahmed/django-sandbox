import BlogListItem from "../blog-list-item/blog-list-item";
import type { BlogPost } from "./blog-posts";

type BlogListProps = {
  posts: BlogPost[];
};

export default function BlogList({ posts }: BlogListProps) {
  return (
    <section className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogListItem
          key={post.id}
          thumbnail={post.thumbnail}
          title={post.title}
          author={post.author}
          datePublished={post.datePublished}
          excerpt={post.excerpt}
          path={post.path}
        />
      ))}
    </section>
  );
}
