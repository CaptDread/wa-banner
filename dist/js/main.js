"use strict";

gsap.to(".spaceship", {
  duration: 4.2,
  y: -130
});
gsap.to(".planet", {
  duration: 4.2,
  y: -100
});
gsap.to(".spaceship", {
  duration: 0.13,
  y: -200,
  scale: 0,
  delay: 4.8
});
gsap.to(".space-words", {
  duration: 0.42,
  fontSize: 28,
  delay: 5.5,
  y: 42
});
gsap.to(".more-space-words", {
  duration: 0.42,
  fontSize: 17,
  delay: 6,
  y: 50
});
gsap.from(".shoot-n-star", {
  duration: 0.13,
  delay: 7.5,
  x: 100
});
//# sourceMappingURL=main.js.map
