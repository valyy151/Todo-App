const checkButtons = document.getElementsByClassName('check');
const removeButtons = document.getElementsByClassName('remove');

const ongoingTasks = document.getElementById('ongoingTasks');
const doneTasks = document.getElementById('doneTasks');

for (check of checkButtons) {
  check.addEventListener('click', function (event) {
    const checked = event.target.parentElement;
    checked.className = 'finished';
    doneTasks.prepend(checked);
  });
}
