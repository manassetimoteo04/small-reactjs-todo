export function SectionMenu({ allTasks, onFilter, filterTaskBy }) {
  const completed = allTasks.filter((task) => task.completed).length;
  const unCompleted = allTasks.filter((task) => !task.completed).length;
  return (
    <ul className="menu-list">
      {[
        { name: "All", number: allTasks.length },
        { name: "Completed", number: completed },
        { name: "Uncompleted", number: unCompleted },
      ].map((item) => (
        <MenuItem
          item={item}
          onFilter={onFilter}
          filterTaskBy={filterTaskBy}
          key={item.name}
        />
      ))}
    </ul>
  );
}
function MenuItem({ item, onFilter, filterTaskBy }) {
  return (
    <li
      className={filterTaskBy === item.name ? "active" : ""}
      onClick={() => onFilter(item.name)}
    >
      {item.name} <span>{item.number}</span>
    </li>
  );
}
