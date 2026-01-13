document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const level = bar.dataset.level;
    bar.style.width = level + "%";
  });
});
