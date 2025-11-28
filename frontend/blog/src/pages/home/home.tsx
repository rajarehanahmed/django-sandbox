import { useState, useEffect } from "react";
import BlogList from "../../components/blog-list/post-list";
import Header from "../../components/header/header";
import { blogService } from "../../services/blog";
import { Post } from "../../types/blog";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const response = await blogService.getPosts();
        console.log("Fetched posts response:", response);

        setBlogPosts(response.data || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white w-screen">
        <Header />
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white w-screen">
      <Header />
      <BlogList blogPosts={blogPosts} />
    </div>
  );
}
