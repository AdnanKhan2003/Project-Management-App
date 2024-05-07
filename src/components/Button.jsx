export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-700 text-slate-300 py-1 px-4 rounded-md hover:bg-stone-600 hover:text-stone-50 text-md "
      {...props}
    >
      {children}
    </button>
  );
}
