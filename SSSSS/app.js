(() => {
  const root = document.body;
  if (!root) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const ease = 0.06;

  const updatePointer = (event) => {
    const nx = event.clientX / window.innerWidth - 0.5;
    const ny = event.clientY / window.innerHeight - 0.5;
    targetX = nx * 40;
    targetY = ny * 40;
  };

  const tick = () => {
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    root.style.setProperty("--grid-soft-x", `${(currentX * 0.08).toFixed(2)}px`);
    root.style.setProperty("--grid-soft-y", `${(currentY * 0.08).toFixed(2)}px`);
    root.style.setProperty("--grid-accent-x", `${(currentX * -0.13).toFixed(2)}px`);
    root.style.setProperty("--grid-accent-y", `${(currentY * -0.13).toFixed(2)}px`);

    requestAnimationFrame(tick);
  };

  window.addEventListener("mousemove", updatePointer, { passive: true });
  window.addEventListener("touchmove", (event) => {
    const touch = event.touches && event.touches[0];
    if (!touch) return;
    updatePointer(touch);
  }, { passive: true });

  requestAnimationFrame(tick);
})();
