export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-neutral-gray px-4 py-2 rounded-xl hover:bg-light-blue transition-colors cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
