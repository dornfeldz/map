import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

function Post({ post }) {
  return (
    <div className="px-3 mb-5">
      <div className="flex gap-2 items-center mb-3">
        <img
          src={post.profilePicture}
          alt="profile picture"
          className="w-8 h-8 rounded-full"
        />
        <p className="font-bold">{post.fullName}</p>
        <p>{post.username}</p>
        <p className="text-gray-400">{post.postedAgo}</p>
      </div>
      <p className="mb-3">{post.text}</p>
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center gap-1">
          <HiOutlineHeart />
          <p>{post.likes}</p>
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineChatBubbleBottomCenterText />
          <p>{post.comments}</p>
        </div>
        <div className="flex items-center">
          <HiOutlinePaperAirplane />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Post;
