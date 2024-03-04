// Function to update cursor color based on a condition (e.g., dark mode toggle)
function updateCursorColor(newColor) {
  document.documentElement.style.setProperty('--cursor-color', newColor);
}

function updateKeyColor(newColor) {
  document.documentElement.style.setProperty('--key-color', newColor);
}

// Example: Change cursor color when clicking a button
const changeCursorButton = document.querySelector('.toggle-dark');
changeCursorButton.addEventListener('click', () => {
  const newColor = isDark() ? 'blue' : '#a78bfa'; // Adjust conditions based on your dark mode detection
  const newKeyColor = isDark() ? 'black' : 'wheat';
  updateCursorColor(newColor);
  updateKeyColor(newKeyColor);
});


//darkmode toggle
const darkToggle = document.querySelector('.toggle-dark');
const isDark = function () { return document.documentElement.classList.contains('dark'); }
darkToggle.addEventListener('click', (event) => {
  event.preventDefault();
  document.documentElement.classList.toggle('dark');
  const valueChecker = isDark() ? "#a855f7" : "2563EB";
  // console.log(isDark());
particlesJS("particles-js",{
    "particles": {
      "number": {
        "value": 111,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": valueChecker
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 500,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

});
