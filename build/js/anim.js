
  //gsap animation 1
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ['#animate', '#skillcard1', '#skillcard2', '#skillcard3'],
      start: 'top 35%',
      end: 'bottom 5%',
      scrub: false,
      markers: false,
      // toggleActions: 'play reverse',
    }
  })
  tl.from('#animate', {
    y: -10,
    opacity: 0,
    duration: 0.4,
  })

  tl.from('#skillcard1', {
    x: -10,
    opacity: 0,
    duration: 0.4,
  })
  tl.from('#skillcard3', {
    x: 10,
    opacity: 0,
    duration: 0.4,
  })
  tl.from('#skillcard2', {
    y: 10,
    opacity: 0,
    duration: 0.4,
  })
  //gsap animation 2
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ['#animate2'],
      start: 'top 35%',
      end: 'bottom 5%',
      scrub: false,
      markers: false,
      // toggleActions: 'play reverse play reverse',
    }
  })
  tl2.from('#animate2', {
    y: -10,
    opacity: 0,
    duration: 0.4,
  })
  tl2.from('#skillcard4', {
    x: -10,
    opacity: 0,
    duration: 0.4,
  })
  tl2.from('#skillcard6', {
    x: 10,
    opacity: 0,
    duration: 0.4,
  })
  tl2.from('#skillcard5', {
    y: 10,
    opacity: 0,
    duration: 0.4,
  })

  //gsap animation 3
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ['#animate3','#skillcard7', '#skillcard8', '#skillcard9', '#skillcard10'],
      start: 'top 30%',
      end: 'bottom 5%',
      scrub: false,
      markers: false,
      // toggleActions: 'play reverse reverse play',
    }
  })
  tl3.from('#animate3', {
    y: -10,
    opacity: 0,
    duration: 0.4,
  })

  tl3.from('#skillcard7', {
    x: -10,
    opacity: 0,
    duration: 0.4,
  })

  tl3.from('#skillcard9', {
    x: 10,
    opacity: 0,
    duration: 0.4,
  })

  tl3.from('#skillcard8', {
    y: -10,
    opacity: 0,
    duration: 0.4,
  })

  tl3.from('#skillcard10', {
    y: 10,
    opacity: 0,
    duration: 0.4,
  })

  //gsap animation 4
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ['#animate4', 'skillcard11', 'skillcard12'],
      start: 'top 60%',
      end: 'bottom 0%',
      scrub: false,
      markers: false,
      toggleActions: 'play reverse play reverse',
    }
  })

  tl4.from('#animate4', {
    y: -10,
    opacity: 0,
    duration: 0.5,
  })

  tl4.from('#skillcard11', {
    x: -10,
    opacity: 0,
    duration: 0.4,
  })
  tl4.from('#skillcard12', {
    x: 10,
    opacity: 0,
    duration: 0.4,
  })
