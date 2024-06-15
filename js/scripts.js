document.addEventListener('mousemove', (e) => {
    const body = document.querySelector('body');
    const mouseX = e.clientX / body.clientWidth * 100;
    const mouseY = e.clientY / body.clientHeight * 100;
    body.style.backgroundPositionX = `${mouseX}%`;
    body.style.backgroundPositionY = `${mouseY}%`;
  });  