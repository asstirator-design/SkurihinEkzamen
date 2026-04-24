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

  const openBtn = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeVideo");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

const openImage = document.getElementById("openImage");
const imageModal = document.getElementById("imageModal");
const closeImage = document.getElementById("closeImage");

openImage.addEventListener("click", () => {
  imageModal.classList.add("active");
});

closeImage.addEventListener("click", () => {
  imageModal.classList.remove("active");
});

imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.classList.remove("active");
  }
});

  window.addEventListener("mousemove", updatePointer, { passive: true });
  window.addEventListener("touchmove", (event) => {
    const touch = event.touches && event.touches[0];
    if (!touch) return;
    updatePointer(touch);
  }, { passive: true });

  requestAnimationFrame(tick);
})();
