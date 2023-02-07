// NAV TOGGLE
const toggleNav = () => {
  document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
};

const questions = document.querySelectorAll(".toggle-code");

questions.forEach(function (question) {
  const btn = question.querySelector(".toggle-title");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("view-code");
      }
    });
    question.classList.toggle("view-code");
  });
});

// GSAP Horizontal Scroll
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function () {
    let tlMain = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sticky-height",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      })
      .to(".horizontal-scroll", {
        xPercent: -100,
        ease: "none",
      });
  },
});

// CANVAS

const canvas = document.querySelector(".hero-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 90;

const currentFrame = (index) => `./img/hero-anim/${(index + 1).toString()}.png`;

const images = [];
let heroAnim = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(heroAnim, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "",
  },
  onUpdate: render,
});

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[heroAnim.frame], 0, 0);
}
