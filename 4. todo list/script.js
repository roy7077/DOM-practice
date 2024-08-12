var input = document.querySelector('input');
var btn = document.querySelector('button');
var tasks = document.querySelector('ul');

// Function to save tasks to localStorage
var save = () => {
    localStorage.setItem('tasks', tasks.innerHTML); // Store the tasks as HTML
};

// Function to load tasks from localStorage
var showTasks = () => {
    let storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks.innerHTML = storedTasks; // Load the tasks as HTML
    }
};

// Add event listener to the Add button
btn.addEventListener('click', () => {
    if (input.value != '') {
        let list = document.createElement('li');
        list.innerHTML = input.value;

        let span = document.createElement('span');
        span.textContent = '\u00d7'; // Add a space before the asterisk for better formatting

        list.appendChild(span);
        tasks.appendChild(list);
        save(); // Save the updated tasks list
        input.value = ""; // Clear the input field
    }
});

// Add event listener to remove tasks on clicking the span
tasks.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Remove the task item
        save(); // Save the updated tasks list
    }
});

// Load tasks on page load
showTasks();
