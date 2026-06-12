import BlogList from "../../components/blog-list/post-list";
import { blogPosts } from "../../components/blog-list/blog-posts";
import Header from "../../components/header/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container-responsive py-12 sm:py-16">
        <BlogList posts={blogPosts} />
      </main>
    </div>
  );
}
