import chatData from "./chatData.json";
import ChatHead from "./ChatHead";

function Chat() {
  return (
    <div className="flex flex-col mb-5">
      <input
        type="text"
        name="makePost"
        className="bg-gray-300 px-4 py-1 rounded-full w-[85%] mb-3 mt-1 ml-auto mr-auto"
        placeholder="Search..."
      />
      {chatData.map((person) => (
        <ChatHead person={person} />
      ))}
    </div>
  );
}

export default Chat;
