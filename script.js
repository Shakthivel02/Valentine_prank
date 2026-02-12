const content = {
  title: "Will you be my Valentine? 😏",
  subtitle: "Just kidding... unless? 🤔 Nah I'm playing 😂",
  yesButtonText: "Yes 💕",
  noButtonText: "Nah 😂",
  successMessage: "Perfect! That's exactly what I wanted to hear! Knew you'd say no 😎 We're good bro!",
  enableNoButtonEscape: false,
  enableYesButtonEscape: true
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

// Yes button escape - make it run away!
if (content.enableYesButtonEscape) {
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

    yesBtn.style.position = 'fixed';
    yesBtn.style.left = newX + 'px';
    yesBtn.style.top = newY + 'px';
    yesBtn.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.9 + Math.random() * 0.2})`;

    // Change button text after a few escapes
    if (escapeCount === 3) yesBtn.innerText = "Nope!";
    if (escapeCount === 5) yesBtn.innerText = "Not Today! 🏃";
    if (escapeCount === 8) yesBtn.innerText = "Catch Me! 😂";
    if (escapeCount === 12) yesBtn.innerText = "Just Click No! 🤣";

    setTimeout(() => {
      isEscaping = false;
    }, 400);
  };

  yesBtn.addEventListener("mouseenter", escapeButton);
  yesBtn.addEventListener("touchstart", escapeButton);

  // Also escape on click attempt
  yesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    escapeButton();
  });
}

// No button click - the actual success!
noBtn.addEventListener("click", () => {
  document.body.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
  document.body.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';

  document.body.innerHTML = `
    <div style="text-align:center;margin-top:35vh;animation:fadeIn 1s cubic-bezier(0.34, 1.56, 0.64, 1);">
      <h1 style="color:white;font-size:42px;margin-bottom:20px;text-shadow:2px 2px 8px rgba(0,0,0,0.2);">
        ${content.successMessage}
      </h1>
      <div style="font-size:80px;animation:laughing 1.5s ease-in-out infinite;">
        🤝
      </div>
    </div>
    <style>
      @keyframes laughing {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(-5deg); }
        50% { transform: scale(1) rotate(0deg); }
        75% { transform: scale(1.15) rotate(5deg); }
      }
    </style>
  `;
});
