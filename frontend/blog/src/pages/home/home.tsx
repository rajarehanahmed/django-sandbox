// import { useState } from 'react'
import BlogList from "../../components/blog-list/post-list";
import Header from "../../components/header/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-screen">
      <Header />
      <BlogList />
    </div>
  );
}
