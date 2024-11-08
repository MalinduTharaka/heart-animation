const heartsContainer = document.querySelector('.hearts');
const numberOfHearts = 50; // Adjust this for more or fewer hearts

for (let i = 0; i < numberOfHearts; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Randomize animation duration and delay
  const randomDuration = Math.random() * 5 + 5; // Between 5s and 10s
  const randomDelay = Math.random() * 5; // Up to 5s delay

  // Randomize initial horizontal position
  const randomLeft = Math.random() * 100; // Between 0% and 100% of screen width

  // Apply random styles
  heart.style.animationDuration = `${randomDuration}s`;
  heart.style.animationDelay = `${randomDelay}s`;
  heart.style.left = `${randomLeft}%`;

  // Add the heart to the container
  heartsContainer.appendChild(heart);
}
