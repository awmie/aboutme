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

  //hi appear
  let hi = new SplitType('#hi');
  let hi_char = document.querySelectorAll('.char');

  for(j=0; j<hi_char.length; j++){
    hi_char[j].classList.add('translate-y-32')
  }

  gsap.to('.char',{
    y: 0,
    stagger: 0.05,
    delay: 0.02,
    duration: 1
    });

const words = [" a Frontend Developer;", " a Python Developer;", " also interested in Machine Learning;"]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl
  .to('.box', {duration:3, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 2, text: word})
  masterTl.add(tl)
})