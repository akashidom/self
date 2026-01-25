let
vw = window.innerWidth,
vh = window.innerHeight;

window.addEventListener('load', () => {
  const bouncers = document.querySelectorAll('.bounce');

  bouncers.forEach(element => {
    let x = Math.random() * (vw - element.width);
    let y = Math.random() * (vh - element.height);

    let // velocities
    speed = Math.ceil(Math.random() * 3 + 1),
    vx = (Math.random() > 0.5 ? 1: -1) * speed,
    vy = (Math.random() > 0.5 ? 1: -1) * speed;

    // css
    element.style.position = 'absolute';
    element.style.willChange = 'transform';

    function animate() {
      x += vx;
      y += vy;

      if (x <= 0) {
        vx = Math.abs(vx);
      } else if (x + element.width >= vw) {
        vx = -Math.abs(vx);
      }
      if (y <= 0) {
        vy = Math.abs(vy);
      } else if (y + element.height >= vh) {
        vy = -Math.abs(vy);
      }

      element.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  });
});

function receiveSize(width, height) {
  vw = width;
  vh = height;
}