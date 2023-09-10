  //name appear
  let name = new SplitType('#name');
  let characters = document.querySelectorAll('.char');

  for(i=0; i<characters.length; i++){
    characters[i].classList.add('translate-y-32')
  }

  gsap.to('.char',{
    y: 0,
    stagger: 0.05,
    delay: 0.02,
    duration: 1
  });

  gsap.registerPlugin(TextPlugin);
  gsap.fromTo('#cursor', {
  autoAlpha: 0,
  x: -10
}, {
  autoAlpha: 1,
  duration: 1,
  repeat: -1,
  ease: SteppedEase.config(1)
});

let textElement = document.querySelector("#text"); // Get the text element
let cursorElement = document.querySelector("#cursor"); // Get the cursor element

let tween = gsap.to(textElement, {
  text: {
    value: "I am a fourth-year computer science student at Gautam Buddha University in Greater Noida. My current research interests include Machine Learning, Artificial Intelligence, and Python programming."
  },
  duration: 10,
  delay: 2,
  ease: 'none',
  onUpdate: () => {
    // Append the cursor to the text being animated
    textElement.appendChild(cursorElement);
  }
});