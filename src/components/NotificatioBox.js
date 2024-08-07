import { Bell, Calendar } from "react-feather";

export function NotificatioBox({ item }) {
  const today = new Date().getDate();
  const date = new Date(item.date).getDate();
  const res = date - today;
  return (
    <div className="notification-box">
      <span>
        <Bell size={24} />
      </span>
      <div className="notification-content">
        <h4>{item.title}</h4>
        <p>
          {item.description.length > 32
            ? item.description.slice(0, 32) + "..."
            : item.description}
        </p>
        <div className="notification-flex">
          <Calendar size={16} />{" "}
          <p
            className={
              res > 0 ? "yellow-box" : res === 0 ? "blue-box" : `red-box`
            }
          >
            {res > 0
              ? `Faltando ${res} dias`
              : res === 0
              ? "Execução Hoje"
              : `${Math.abs(res)} Dias Atrasado`}
          </p>
        </div>
      </div>
    </div>
  );
}
