export function fetchFormData() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('duedate').value;
  const priority = document.getElementById('priority').value;

  return {
    title,
    description,
    dueDate,
    priority
  };
}
