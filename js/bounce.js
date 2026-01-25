const bouncers = document.querySelectorAll('.bounce');

bouncers.forEach(element => {
  let
  x = Math.random() * (innerWidth - element.offsetWidth),
  y = Math.random() * (innerHeight - element.offsetHeight),
  speed = Math.ceil(Math.random() * 3) + 1

  let
  velocityX = (Math.random() > 0.5 ? 1: -1) * speed,
  velocityY = (Math.random() > 0.5 ? 1: -1) * speed;

  // css
  element.style.position = 'absolute';
  element.style.willChange = 'transform';

  function animate() {
    const
    wallX = innerWidth - element.offsetWidth,
    wallY = innerHeight - element.offsetHeight;

    x += velocityX;
    y += velocityY;

    if (x <= 0 || x >= wallX) {
      velocityX *= -1;
      if (element.classList.contains("dance")) {
        element.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      }
    }
    if (y <= 0 || y >= wallY) {
      velocityY *= -1;
      if (element.classList.contains("dance")) {
        element.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      }
    }

    element.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});