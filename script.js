const content = {
  title: "Will you be my Valentine? 💖",
  subtitle: "I promise unlimited cuddles, late-night talks, and stealing your hoodies forever 🥺👉�",
  yesButtonText: "Yes! 💘",
  noButtonText: "No 💔",
  successMessage: "OMG YESSS! You just made me the happiest person alive! 🥹✨💕",
  enableNoButtonEscape: true
};

// Elements
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// Apply content
title.innerText = content.title;
subtitle.innerText = content.subtitle;
yesBtn.innerText = content.yesButtonText;
noBtn.innerText = content.noButtonText;

// No button escape - make it impossible to catch!
if (content.enableNoButtonEscape) {
  let escapeCount = 0;
  let isEscaping = false;

  const escapeButton = () => {
    if (isEscaping) return;
    isEscaping = true;

    escapeCount++;

    // Random position anywhere on screen
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 80;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.9 + Math.random() * 0.2})`;

    // Change button text after a few escapes
    if (escapeCount === 3) noBtn.innerText = "Nice Try! 😏";
    if (escapeCount === 5) noBtn.innerText = "Still No! 😆";
    if (escapeCount === 8) noBtn.innerText = "Give Up! 😂";
    if (escapeCount === 12) noBtn.innerText = "Just Say Yes! 💕";

    setTimeout(() => {
      isEscaping = false;
    }, 400);
  };

  noBtn.addEventListener("mouseenter", escapeButton);
  noBtn.addEventListener("touchstart", escapeButton);

  // Also escape on click attempt
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    escapeButton();
  });
}

// Yes click
yesBtn.addEventListener("click", () => {
  document.body.style.background = 'linear-gradient(135deg, #ff4d6d 0%, #ff2d52 100%)';
  document.body.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';

  document.body.innerHTML = `
    <div style="text-align:center;margin-top:35vh;animation:fadeIn 1s cubic-bezier(0.34, 1.56, 0.64, 1);">
      <h1 style="color:white;font-size:42px;margin-bottom:20px;text-shadow:2px 2px 8px rgba(0,0,0,0.2);">
        ${content.successMessage}
      </h1>
      <div style="font-size:80px;animation:heartBeat 1.8s ease-in-out infinite;">
        💖💕💗
      </div>
    </div>
    <style>
      @keyframes heartBeat {
        0%, 100% { transform: scale(1); }
        20% { transform: scale(1.1); }
        40% { transform: scale(1); }
        60% { transform: scale(1.15); }
        80% { transform: scale(1); }
      }
    </style>
  `;
});
