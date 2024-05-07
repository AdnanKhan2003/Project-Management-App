import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

import { useRef } from "react";

export default function ProjectForm({ onClick, onSubmit }) {
  const titleData = useRef();
  const descriptionData = useRef();
  const dateData = useRef();
  const dialog = useRef();

  function handleFormData() {
    const title = titleData.current.value;
    const description = descriptionData.current.value;
    const date = dateData.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onSubmit({ title, description, date });
  }

  return (
    <section className="w-2/3 mt-20 px-5 flex flex-col items-end">
      <Modal ref={dialog} btnCaption="Okay">
        <h1 className="font-bold text-2xl my-2 ">Invalid Input</h1>
        <p className="mt-2">Oops.. Looks like you forgot to enter a value</p>
        <p className="mt-2 mb-6">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <menu>
        <button onClick={onClick} className="mr-5">
          Cancel
        </button>
        <Button onClick={handleFormData}>Save</Button>
      </menu>
      <form className="flex   flex-col w-full mt-12">
        <Input ref={titleData} type="text">
          Title
        </Input>
        <Input ref={descriptionData} textarea>
          Description
        </Input>
        <Input ref={dateData} type="date">
          Date
        </Input>
      </form>
    </section>
  );
}
