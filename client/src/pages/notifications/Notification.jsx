import { HiOutlineBell } from "react-icons/hi2";

function Notification({ notification }) {
  return (
    <div className="flex flex-col mt-2">
      <div className="flex gap-3 items-center justify-between">
        <div className="flex items-center gap-1">
          <HiOutlineBell className="text-xl" />
          <h1 className="text-lg font-medium">{notification.store_name}</h1>
        </div>
        <p className="text-sm text-gray-500">{notification.sent_time}</p>
      </div>
      <p className="mb-3 italic">{notification.title}</p>
      <hr />
    </div>
  );
}

export default Notification;
