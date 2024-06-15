document.addEventListener('mousemove', function(event) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = event.pageX + 'px';
    bubble.style.top = event.pageY + 'px';
    document.body.appendChild(bubble);
  
    // Hapus bubble setelah beberapa detik
    setTimeout(function() {
      bubble.remove();
    }, 2000);
  });
  