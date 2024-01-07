function notify(message) {

  const notificationDiv = document.getElementById('notification');
  notificationDiv.style.display = 'block';
  notificationDiv.textContent = message;

  notificationDiv.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  })
}