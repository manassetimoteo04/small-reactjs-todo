import { SectionHeading } from "./SectionHeading";
import { NotificatioBox } from "./NotificatioBox";
import { Bell } from "react-feather";
export function Notification({ allTasks }) {
  const today = new Date().getDate();
  const notificationList = allTasks.filter((ntf) => {
    const date = new Date(ntf.date).getDate();
    if (date - today < 4) return ntf;
  });
  return (
    <section>
      <SectionHeading>
        <h2>Notifications</h2>
        <span>See Notifications</span>
      </SectionHeading>
      {notificationList.length === 0 ? (
        <EmptyNotification />
      ) : (
        <div className="notification-list">
          {notificationList.map((item) => {
            return <NotificatioBox item={item}></NotificatioBox>;
          })}
        </div>
      )}
    </section>
  );
}
function EmptyNotification({ children }) {
  return (
    <p className="empty-list">
      <Bell size={40} /> Sem Notiicações
    </p>
  );
}
