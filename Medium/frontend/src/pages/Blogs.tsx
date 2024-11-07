import React from "react";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";
import useBlogs from "../hooks/useBlogs";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) return <div>loading.....</div>;

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((e) => (
            <BlogCard
            id={e.id}
              authorName={e?.author?.name || "Anonymous"}
              title={e?.title}
              content={e?.content}
              publishedDate={"07 Nov 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
