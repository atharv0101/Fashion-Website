// Get all modal elements
var modals = document.querySelectorAll('.modal');

// Get all close buttons
var closeButtons = document.querySelectorAll('.close');

// Get all member boxes
var memberBoxes = document.querySelectorAll('.member-box');

// Get the faculty box and its modal
var facultyBox = document.querySelector('.faculty-box');
var modalFaculty = document.getElementById('myModal0');
var closeFaculty = modalFaculty ? modalFaculty.querySelector('.close') : null;

// Function to open modal
function openModal(modal) {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Associate each member box with the corresponding modal
memberBoxes.forEach(function(box, index) {
    var modal = modals[index + 1]; // Adjust index to match modals (skipping index 0 for faculty modal)
    if (modal) {
        box.addEventListener('click', function() {
            openModal(modal);
        });
    }
});

// Associate the faculty box with its modal
if (facultyBox && modalFaculty) {
    facultyBox.addEventListener('click', function() {
        openModal(modalFaculty);
    });
}

// Close modals when clicking the close button
closeButtons.forEach(function(button, index) {
    var modal = modals[index];
    if (modal) {
        button.addEventListener('click', function() {
            closeModal(modal);
        });
    }
});

// Close modals when clicking outside of them
window.addEventListener('click', function(event) {
    modals.forEach(function(modal) {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});
