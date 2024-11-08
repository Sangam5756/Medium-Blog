import useBlog from "../hooks/useBlog";
import { useNavigate, useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import AppBar from "../components/AppBar";
import Shimmer from "../components/Shimmer";
import { useEffect } from "react";

const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({ id: id });
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, []);
  return (
    <div className="w-full">
      {loading ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <FullBlog blog={blog} />
      )}
    </div>
  );
};

export default Blog;
