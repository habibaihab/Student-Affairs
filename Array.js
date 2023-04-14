let Students = [];

if (localStorage.getItem('Students')) {
  Students = JSON.parse(localStorage.getItem('Students'));
}

// Make the Students array available to other scripts
window.Students = Students;
