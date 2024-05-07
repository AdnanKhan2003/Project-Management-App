import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="px-6 py-6 backdrop:bg-neutral-800/90     rounded-md "
    >
      {children}
      <form method="dialog">
        <Button>{btnCaption}</Button>
      </form>
    </dialog>,
    document.querySelector("body")
  );
});

export default Modal;
