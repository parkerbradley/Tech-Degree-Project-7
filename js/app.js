const notified = document.getElementById('notified');
const alert = document.getElementById('alert');
const close = document.getElementById('close');



//hide alert when X is clicked
close.addEventListener('click', (e) => {
  alert.style.display = 'none';
  notified.style.display = 'none';
});
