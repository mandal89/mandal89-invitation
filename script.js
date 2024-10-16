let t1 = gsap.timeline({ paused: true });

t1.to('.letter', { duration: 0.5, ease: "power3.out", translateY: -100 })
  .to('.shadow', { duration: 0.3, ease: "power2.out", scaleX: 2, opacity: 0.8 });

function openCard() {
  t1.play();
}

let t2 = gsap.timeline({ paused: true });

t2.to('.letter', { duration: 0.3, ease: "power2.in", translateY: 0 })
  .to('.shadow', { duration: 0.2, ease: "power3.in", scaleX: 1, opacity: 0 });

function closeCard() {
  t2.play();
}

function closeCard(e) {
    t1.reverse();
    t2.reverse();
}
