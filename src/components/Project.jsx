import Tasks from "./Tasks";

export default function Project({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  function handleClick(id) {
    onDeleteProject(id);
  }

  return (
    <section className="mt-20 w-2/3 px-4 pt-6">
      <header className="flex justify-between">
        <h1 className="font-bold text-3xl">{project.title}</h1>
        <button onClick={() => handleClick(project.projectId)}>Delete</button>
      </header>
      <div>
        <p className="text-stone-500 mt-2 mb-4  ">{project.date}</p>
        <p className="mb-4 whitespace-pre-wrap ">{project.description}</p>
      </div>
      <div className="bg-stone-800 h-px  "></div>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </section>
  );
}
