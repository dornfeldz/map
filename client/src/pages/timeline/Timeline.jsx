import { useEffect, useState } from "react";
import Post from "./Post";
import postsData from "./posts.json";

function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => setPosts(postsData), []);

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        name="makePost"
        className="bg-gray-300 px-4 py-1 rounded-full w-[85%] mb-3"
        placeholder="What's on your mind?"
      />
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
