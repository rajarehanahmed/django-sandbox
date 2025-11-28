import { Post } from "../../types/blog";
import BlogListItem from "../blog-list-item/blog-list-item";

interface PostListProps {
  blogPosts: Post[];
}

export default function BlogList({ blogPosts }: PostListProps) {
  return (
    <div className="px-70">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {blogPosts && blogPosts.map((post) => (
          <BlogListItem
            key={post.id}
            thumbnail={post.thumbnail}
            title={post.title}
            author={post.author}
            datePublished={post.datePublished}
            path={`/blog/${post.id}`}
          />
        ))}
      </div>
    </div>
  );
}
