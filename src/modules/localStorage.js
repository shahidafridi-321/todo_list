// Save the updated project to local storage
export function saveProjectToLocalStorage(project) {
  localStorage.setItem('localCopyOfDefaultProject', JSON.stringify(project));
}

import {createProject} from './createProject';
export let defaultProject = JSON.parse(localStorage.getItem('localCopyOfDefaultProject')) || createProject('Default Project');

