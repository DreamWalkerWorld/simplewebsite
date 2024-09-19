// Open modal for larger image
function openModal(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
      alert("Message sent successfully!");
      document.getElementById('contact-form').reset(); // Optional: Clear the form after submission
    } else {
      alert("Please fill in all fields!");
    }
  });


