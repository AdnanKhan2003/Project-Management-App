import Button from "./Button";

export default function Sidebar({
  onChange,
  onClick,
  projects,
  currentProject,
}) {
  const classes =
    "px-4 py-1 mb-1 rounded-sm text-slate-100 hover:bg-neutral-300/10 ";

  const classActive = `${classes} bg-neutral-300/10 `;

  function handleClick(id) {
    onChange(id);
  }

  return (
    <aside className="bg-stone-900 w-1/3 rounded-r-lg mt-20 pb-96 pt-8 pl-8 pr-8    ">
      <h1 className="text-white font-bold mb-6 text-lg uppercase">
        Your Projects
      </h1>
      <Button onClick={onClick}>+ Add Project</Button>
      <ol className="mt-10">
        {projects.projects.map((project) => (
          <li
            onClick={() => handleClick(project.projectId)}
            key={project.projectId}
            className={
              project.projectId === projects.projectId ? classActive : classes
            }
          >
            {project.title}
          </li>
        ))}
      </ol>
    </aside>
  );
}
