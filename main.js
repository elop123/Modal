
let modal = document.getElementById('myModal');
let openModalBtn = document.getElementById('openModalBtn');
let closeBtn = document.getElementById('closeBtn');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

 // Add event listener to open modal button
 openModalBtn.addEventListener('click', openModal);

 // Add event listener to close modal button
 closeBtn.addEventListener('click', closeModal);
