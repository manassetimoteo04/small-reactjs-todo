import { Button } from "./Button";
import { Plus } from "react-feather";

export function SectionHeading({ onShowForm, children, showButton }) {
  return (
    <div className="section-heading">
      <div>{children}</div>
      {showButton && (
        <Button style={{}} onClick={onShowForm}>
          <Plus size={24} color="#4a4dfc" />
          New Task
        </Button>
      )}
    </div>
  );
}
