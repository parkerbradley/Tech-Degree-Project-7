const notified = document.getElementById('notified');
const alert = document.getElementById('alert');
const close = document.getElementById('close');



//hide alert when X is clicked
close.addEventListener('click', (e) => {
  alert.style.display = 'none';
  notified.style.display = 'none';
});


//----------- Message User Functionality -----------//
const userSearch = document.getElementById('search-for-user');
const userMessage = document.getElementById('message-for-user');
const errorMessage = document.getElementById('error');
const messageButton = document.getElementById('message-button');
const names = document.getElementsByClassName('name');


messageButton.addEventListener('click', (e) => {
  if (userSearch.value.length == 0 | userMessage.value.length == 0) {
    errorMessage.style.display = 'block';
  } else {
    userSearch.value = '';
    userMessage.value = '';
    window.alert('Your Message Was Successfully Sent!');
  };
});
