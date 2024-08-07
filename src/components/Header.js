export function Header({ onActive, activeSection }) {
  return (
    <header className="main-header">
      <nav>
        <ul>
          {[
            { name: "All Tasks" },
            { name: "Today's Task" },
            { name: "Notification" },
          ].map((item) => {
            return (
              <HeaderListItem
                item={item}
                onClick={onActive}
                activeSection={activeSection}
                key={item.name}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
function HeaderListItem({ item, onClick, activeSection }) {
  return (
    <li
      className={item.name === activeSection ? "active" : ""}
      onClick={() => onClick(item.name)}
    >
      {item.name}
    </li>
  );
}
