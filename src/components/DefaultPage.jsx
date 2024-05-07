import Button from "./Button";

export default function DefaultPage({ onClick }) {
  return (
    <section className="w-2/3 flex flex-col items-center mt-20 px-4 pt-8">
      <img src="logo.png" className="w-20     " alt="Logo" />
      <h1 className="font-semibold text-xl my-3">No Project Selected</h1>
      <p className="text-stone-400 mb-6">
        Select a project or get started with a new one
      </p>
      <Button onClick={onClick}>Create new project</Button>
    </section>
  );
}
