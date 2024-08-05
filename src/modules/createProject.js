// This factory creates a project object
export function createProject(name) {
  let todos = [];
  return {
    name,
    todos,
  };
}

// Sets project name
export function setProjectName(project, projectClass) {
  let projectName = document.querySelector(projectClass);
  projectName.textContent = project.name;
}


// Stores new projects names
export let allNewProjects = [];

// Gets values from generated form and pushes it to the projectNames array

// Creates new project for all the names in projectNames array
export function createNewProject() {
  let projectContainer = document.querySelector('.projects');
  projectContainer.innerHTML = '';
  allNewProjects.forEach(project => {
    let div = document.createElement('div');
    div.classList.add('project');
    let name = document.createElement('h2');
    name.classList.add('project-name');
    name.textContent = project;
    div.appendChild(name);
    projectContainer.appendChild(div);
  });
}
