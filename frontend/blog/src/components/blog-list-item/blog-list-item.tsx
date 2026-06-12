type BlogListItemProps = {
  thumbnail?: string;
  title: string;
  author: string;
  datePublished: string;
  excerpt: string;
  path: string;
};

export default function BlogListItem({
  thumbnail,
  title,
  author,
  datePublished,
  excerpt,
  path,
}: BlogListItemProps) {
  return (
    <article>
      {thumbnail ? (
        <a href={path} className="block overflow-hidden bg-slate-100">
          <img
            src={thumbnail}
            alt={title}
            className="aspect-[1.65/1] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </a>
      ) : null}
      <div className="pt-6">
        <a href={path}>
          <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight text-[#1e2258] transition-colors hover:text-blue-700">
            {title}
          </h2>
        </a>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.95rem] font-semibold text-[#2e2f3f]">
          <span>{author}</span>
          <span className="text-slate-400">|</span>
          <span>{datePublished}</span>
        </div>
        <p className="mt-5 text-[1.05rem] leading-8 text-slate-700">
          {excerpt}
        </p>
        <a
          href={path}
          className="mt-5 inline-block text-[1.05rem] font-semibold text-blue-700 transition-colors hover:text-blue-900"
        >
          Read more ▸
        </a>
      </div>
    </article>
  );
}
