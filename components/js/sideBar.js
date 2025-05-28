const header = document.querySelector('.header');

// prepare a toggle button that appears on the middle right of the header component and helps user to toggle the sidebar/header component only when the screen is smaller than 768px.
const toggleButton = document.createElement('button');
toggleButton.classList.add('toggle-button');
toggleButton.innerHTML = '<span class="toggle-icon"></span>';
header.appendChild(toggleButton);

// add an event listener to the toggle button that toggles the sidebar/header component when clicked
toggleButton.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
  header.classList.toggle('active');
});

