export default function Header() {
  return (
    <>
      <div className="px-70 flex h-18 items-center justify-between bg-white sticky top-0">
        <div className="text-2xl font-mono">
          <a href="/" className="hover:text-shadow-gray-400">
            Rehan's Blog
          </a>
        </div>
        <nav className="flex space-x-6">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
          <a
            href="https://www.linkedin.com/in/rehan99/"
            target="_blank"
            className="hover:text-gray-700"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rajarehanahmed"
            target="_blank"
            className="hover:text-gray-700"
          >
            Github
          </a>
        </nav>
      </div>
      <header className="px-70 bg-gradient-to-r from-[#181743] to-[#2a599f] text-white py-15 mb-6">
        <h1 className="text-4xl font-bold text-white">
          Welcome to My Tech Blog
        </h1>
        <p className="mt-4 text-2xl text-white">
          Insights and tutorials on web development, programming, and
          technology.
        </p>
      </header>
    </>
  );
}
