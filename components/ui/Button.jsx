export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-4 py-2 rounded-xl transition-colors cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
