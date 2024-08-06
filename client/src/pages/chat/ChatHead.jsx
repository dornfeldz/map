function ChatHead({ person }) {
  return (
    <div className="flex gap-3 items-center mb-2 mx-3 hover:cursor-pointer">
      <img
        src={person.pictureLink}
        alt="person profile picture"
        className="w-9 h-9 rounded-full"
      />
      <div className="flex flex-col w-80">
        <p className="font-bold">{person.nickname}</p>
        <div className="flex justify-between">
          <p>{person.lastMessage}</p>
          <p className="text-gray-400">{person.lastMessageTimestamp}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ChatHead;
