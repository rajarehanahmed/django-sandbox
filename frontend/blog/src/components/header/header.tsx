export default function Header() {
  return (
    <>
      <div className="border-b border-slate-200 bg-white">
        <div className="container-responsive flex min-h-18 flex-wrap items-center justify-between gap-4 py-4">
          <a
            href="/"
            className="bg-black px-3 py-2 text-2xl font-extrabold leading-none tracking-tight text-white"
          >
            moz://a
          </a>
          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-900 sm:gap-8">
            <a href="/" className="transition-colors hover:text-blue-700">
              Twitter
            </a>
            <a href="/" className="transition-colors hover:text-blue-700">
              Get Involved
            </a>
            <a
              href="/"
              className="border border-blue-700 px-4 py-2 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
            >
              Download Firefox Nightly
            </a>
          </nav>
        </div>
      </div>
      <header className="overflow-hidden bg-[#1a1e58] text-white">
        <div className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#1a1e58_0%,#173d7a_48%,#3e56c4_70%,#7c57df_100%)]" />
          <div className="absolute right-[-12%] top-[-38%] h-[30rem] w-[48rem] rotate-[-20deg] rounded-[4rem] bg-[rgba(177,124,255,0.3)]" />
          <div className="absolute left-[-8%] bottom-[-35%] h-[18rem] w-[24rem] rotate-[18deg] rounded-[3rem] bg-[rgba(34,69,153,0.38)]" />
          <div className="container-responsive relative py-16 sm:py-20">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Firefox Nightly News
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-light leading-relaxed text-white sm:text-[2.05rem]">
              Let&apos;s improve quality, build after build!
            </p>
          </div>
        </div>
      </header>
      <div className="bg-[#14295b] text-white">
        <div className="container-responsive flex min-h-11 flex-wrap items-center justify-between gap-4 py-3">
          <a
            href="/"
            className="inline-flex items-center gap-3 text-lg font-semibold"
          >
            <span className="text-2xl leading-none">›</span>
            Explore
          </a>
          <div className="flex items-center gap-3">
            <input
              type="search"
              aria-label="Search posts"
              className="h-8 w-44 border border-white/80 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/70 focus:border-white sm:w-52"
              placeholder=""
            />
            <span className="text-xl" aria-hidden="true">
              ⌕
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
