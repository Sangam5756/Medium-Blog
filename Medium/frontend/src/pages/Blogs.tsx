import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl">
        <BlogCard
          authorName={"sangam"}
          title={"first blog"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, velit! Provident inventore earum dignissimos sunt repellat cupiditate deleniti, nobis voluptatem voluptatibus ab modi recusandae amet quae ad dolore aut dolorum nostrum fugit, et veritatis praesentium quibusdam.  assumenda perferendis quos. Officia "
          }
          publishedDate={"07 Nov 2024"}
        />
        <BlogCard
          authorName={"sangam"}
          title={"first blog"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, velit! Provident inventore earum dignissimos sunt repellat cupiditate deleniti, nobis voluptatem voluptatibus ab modi recusandae amet quae ad dolore aut dolorum nostrum fugit, et veritatis praesentium quibusdam.  assumenda perferendis quos. Officia "
          }
          publishedDate={"07 Nov 2024"}
        />
        <BlogCard
          authorName={"sangam"}
          title={"first blog"}
          content={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, velit! Provident inventore earum dignissimos sunt repellat cupiditate deleniti, nobis voluptatem voluptatibus ab modi recusandae amet quae ad dolore aut dolorum nostrum fugit, et veritatis praesentium quibusdam.  assumenda perferendis quos. Officia "
          }
          publishedDate={"07 Nov 2024"}
        />
      </div>
    </div>
  );
};

export default Blogs;
