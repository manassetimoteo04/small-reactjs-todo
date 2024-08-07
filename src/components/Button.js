export function Button({ style, onClick, children }) {
  return (
    <button style={style} className="button" onClick={onClick}>
      {children}
    </button>
  );
}
