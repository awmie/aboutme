
//darkmode toggle
const darkToggle = document.querySelector('.toggle-dark');
darkToggle.addEventListener('click', (event) =>{
  event.preventDefault();
  document.documentElement.classList.toggle('dark');
})


//top-up-button
let toTopButton = document.getElementById("to-top-button");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove("hidden");
    } else {
        toTopButton.classList.add("hidden");
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
