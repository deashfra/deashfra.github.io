document.addEventListener('mousemove', function(e) {
    const bg = document.querySelector('.interactive-background');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
  
    bg.style.transform = `translate(-${mouseX * 50}px, -${mouseY * 50}px)`;
  });
  