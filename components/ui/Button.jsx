export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-deep-navy px-4 py-2 rounded-xl hover:bg-deep-navy/80 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
