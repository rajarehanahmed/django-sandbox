import BlogListItem from "../blog-list-item/blog-list-item";

export default function BlogList() {
  // TODO: fetch blog posts from backend API, for now using static data for building layout
  const blogPosts = [
    {
      id: 1,
      thumbnail: "https://blog.nightly.mozilla.org/files/2025/10/image2.png",
      title: "Understanding React Hooks",
      author: "Jane Doe",
      datePublished: "2024-01-15",
    },
    {
      id: 2,
      thumbnail:
        "https://blog.nightly.mozilla.org/files/2025/10/headlines190_3.png",
      title: "A Guide to TypeScript",
      author: "John Smith",
      datePublished: "2024-02-20",
    },
    {
      id: 3,
      thumbnail:
        "https://blog.nightly.mozilla.org/files/2025/09/headlines189_3.png",
      title: "CSS Grid vs Flexbox",
      author: "Alice Johnson",
      datePublished: "2024-03-10",
    },
    {
      id: 4,
      thumbnail:
        "https://blog.nightly.mozilla.org/files/2025/09/headlines187_1.png",
      title: "Building Accessible Web Apps",
      author: "Bob Brown",
      datePublished: "2024-04-05",
    },
    {
      id: 5,
      thumbnail: "https://blog.nightly.mozilla.org/files/2025/10/image2.png",
      title: "Understanding React Hooks",
      author: "Jane Doe",
      datePublished: "2024-01-15",
    },
    {
      id: 6,
      thumbnail:
        "https://blog.nightly.mozilla.org/files/2025/10/headlines190_3.png",
      title: "A Guide to TypeScript",
      author: "John Smith",
      datePublished: "2024-02-20",
    },
    {
      id: 7,
      thumbnail:
        "https://blog.nightly.mozilla.org/files/2025/09/headlines189_3.png",
      title: "CSS Grid vs Flexbox",
      author: "Alice Johnson",
      datePublished: "2024-03-10",
    },
    {
      id: 8,
      thumbnail:
        "https://blog.nightly.mozilla.org/files/2025/09/headlines187_1.png",
      title: "Building Accessible Web Apps",
      author: "Bob Brown",
      datePublished: "2024-04-05",
    },
  ];

  return (
    <div className="px-70">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {blogPosts.map((post) => (
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
