import { useEffect, useState } from "react";
import notificationsData from "./notificationsData.json";
import Notification from "./Notification";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => setNotifications(notificationsData), []);

  return (
    <div className="px-4">
      {notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
    </div>
  );
}

export default Notifications;
