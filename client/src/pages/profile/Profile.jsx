import { useEffect, useState } from "react";
import Post from "../timeline/Post";
import postsData from "../timeline/posts.json";

function Profile() {
  const [posts, setPosts] = useState([]);
  useEffect(() => setPosts(postsData), []);

  return (
    <div className="h-full">
      <div>
        <div className="flex justify-between mx-5 mt-5 mb-8">
          <div>
            <h1 className="font-bold">username</h1>
            <p>full name</p>
            <p className="text-sm text-gray-400">1,045 followers</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/duucjutx3/image/upload/v1736627138/react%20retail/eou8llqyj7gqzza5tmac.jpg"
              alt="profile picture"
              className="rounded-full size-16"
            />
          </div>
        </div>
        <div className="flex justify-between mx-5 mb-7">
          <button className="w-[48%] border px-7 py-0.5 rounded">
            Edit profile
          </button>
          <button className="w-[48%] border px-7 py-0.5 rounded">
            Share profile
          </button>
        </div>
        <div className="flex justify-around">
          <button className="w-full pb-1 font-bold border-b border-black">
            Posts
          </button>
          <button className="w-full pb-1 border-b">Likes</button>
          <button className="w-full pb-1 border-b">Appointments</button>
        </div>
      </div>
      <div className="h-full overflow-y-scroll scrollbar-hide">
        <div className="pt-5">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
