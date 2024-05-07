import { forwardRef } from "react";

const Input = forwardRef(function Input({ children, textarea, ...props }, ref) {
  const classes =
    "bg-stone-200 rounded-sm px-2 py-2 outline-none border-b-2 focus:border-b-slate-600 ";
  return (
    <>
      <label>{children}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </>
  );
});

export default Input;
