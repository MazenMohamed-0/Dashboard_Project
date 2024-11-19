document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
        if (button.classList.contains('liked')) {
            button.innerHTML = '<i class="fa fa-heart"></i>'; // Liked state
        } else {
            button.innerHTML = '<i class="fa fa-heart-o"></i>'; // Unliked state
        }
    });
});

document.querySelector('.btn-primary').addEventListener('click', () => {
    alert("Alert sent to the user!");
});

document.querySelector('.btn-danger').addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to delete this user?");
    if (confirmation) {
        alert("User deleted!");
    } else {
        alert("User deletion canceled.");
    }
});