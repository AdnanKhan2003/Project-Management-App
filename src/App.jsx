import Sidebar from "./components/Sidebar";
import DefaultPage from "./components/DefaultPage.jsx";
import ProjectForm from "./components/ProjectForm";
import Project from "./components/Project";

import { useState } from "react";

function App() {
  const [projectContent, setProjectContent] = useState({
    projectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectContent((prevState) => {
      return {
        ...prevState,
        projectId: null,
      };
    });
  }

  function handleStartRemoveProject() {
    setProjectContent((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectContent((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        projectId,
      };

      return {
        ...prevState,
        projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectContent((prevState) => {
      return {
        ...prevState,
        projectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.projectId !== id
        ),
      };
    });
  }

  function handleChangeProject(id) {
    setProjectContent((prevState) => {
      return {
        ...prevState,
        projectId: id,
      };
    });
  }

  const currentProject = projectContent.projects.find((project) => {
    return project.projectId === projectContent.projectId;
  });

  function handleAddTask(taskName) {
    setProjectContent((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: taskName,
        projectId: prevState.projectId,
        taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectContent((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  let content = (
    <Project
      project={currentProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectContent.tasks.filter(
        (task) => task.projectId === projectContent.projectId
      )}
    />
  );
  if (projectContent.projectId === undefined) {
    content = <DefaultPage onClick={handleStartAddProject} />;
  }
  if (projectContent.projectId === null) {
    content = (
      <ProjectForm
        onClick={handleStartRemoveProject}
        onSubmit={handleAddProject}
      />
    );
  }

  return (
    <main className="flex">
      <Sidebar
        onChange={handleChangeProject}
        onClick={handleStartAddProject}
        projects={projectContent}
        currentProject={projectContent.projectId}
      />
      {content}
    </main>
  );
}

export default App;
2;
