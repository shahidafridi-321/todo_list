import './styles/style.css';

// if the local storage contains todos take it from there other wise Create a default project to be displayed on screen
import {saveProjectToLocalStorage , defaultProject} from './modules/localStorage';
saveProjectToLocalStorage(defaultProject);

// The new task button is selected and an eventListener is added which generates a form
import{generateFrom,generateProjectForm,displayTodos} from './modules/DOMmanager';
document.querySelector('.new-todo').addEventListener('click', generateFrom);

// Call for a method that sets the name of the project
import { setProjectName } from './modules/createProject';
setProjectName(defaultProject, '.project-name');

// Call for displaying all todos
displayTodos(defaultProject, 'todosContainer');

document.querySelector('.new-project').addEventListener('click', generateProjectForm);



