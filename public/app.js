const checkButtons = document.getElementsByClassName('check');
const removeButtons = document.getElementsByClassName('remove');

const ongoingTasks = document.getElementById('ongoingTasks');
const doneTasks = document.getElementById('doneTasks');

function addClickToCheckButtons() {
  for (check of checkButtons) {
    check.addEventListener('click', function (event) {
      const checked = event.target.parentElement;
      checked.className = 'finished';
      doneTasks.prepend(checked);
    });
  }
}
function addClickToRemoveButtons() {
  for (remove of removeButtons) {
    remove.addEventListener('click', function (event) {
      const checked = event.target.parentElement;
      checked.remove();
    });
  }
}
addClickToCheckButtons();
addClickToRemoveButtons();

const addButton = document.getElementById('aButton');
const textInput = document.querySelector('input');

function createTask() {
  const returnedValue = textInput.value;
  const newRemoveButton = document.createElement('a');
  newRemoveButton.innerHTML = '&times;';
  newRemoveButton.classList.add('remove');

  const newText = document.createElement('p');
  newText.innerText = returnedValue;

  const newCheckButton = document.createElement('a');
  newCheckButton.innerHTML = '&#10003;';
  newCheckButton.classList.add('check');

  const newTask = document.createElement('li');
  newTask.classList.add('ongoing');

  newTask.prepend(newCheckButton, newText, newRemoveButton);
  ongoingTasks.prepend(newTask);

  textInput.value = '';
  addClickToCheckButtons();
  addClickToRemoveButtons();
}

addButton.addEventListener('click', () => {
  textInput.style.display = 'flex';
  if (textInput.style.display == 'flex' && textInput.value !== '') {
    createTask();
  }
});

textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && textInput.value !== '') {
    createTask();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const supportText = document.getElementById('supportText').value;
  const reportProblem = document.getElementsById('reportProblem');

  reportProblem.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(supportText);
  });
});
