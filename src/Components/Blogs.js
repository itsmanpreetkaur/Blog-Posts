import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center w-[540px]  gap-y-7 mb-[70px] py-[55px] mt-[350px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h2>Not found</h2>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm">{post.title}</p>
            <p className="text-xs">
              By <span>{post.author} </span>on{" "}
              <span className="font-bold underline">{post.category}</span>
            </p>
            <p className="text-xs">
              Posted On <span>{post.date}</span>
            </p>
            <p className="text-xs mt-3">{post.content}</p>
            <div className="flex gap-x-2">
              {post.tags.map((tag, index) => (
                <p
                  key={index}
                  className="underline text-blue-700 text-[10px] mt-2"
                >
                  <span>#</span>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
