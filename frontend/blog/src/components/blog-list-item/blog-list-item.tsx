type BlogListItemProps = {
  thumbnail?: string;
  title: string;
  author: string;
  datePublished: string;
  path: string;
};

export default function BlogListItem({
  thumbnail,
  title,
  author,
  datePublished,
  path,
}: BlogListItemProps) {
  return (
    <div className="overflow-hidden">
      <a href={path}>
        <div className="w-full h-48 overflow-hidden mb-3">
          <img
            src={thumbnail}
            alt="image"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </a>
      <p className="text-gray-600 mb-2">
        {author} | {datePublished}
      </p>
      <a href={path} className="text-blue-600 hover:text-blue-800 font-medium">
        Read More
      </a>
    </div>
  );
}
