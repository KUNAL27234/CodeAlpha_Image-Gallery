const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const filterButtons = document.querySelectorAll(".filter-buttons button");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prev / Next Navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Close on click outside
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

// Filter Function
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    images.forEach(img => {
      if (filter === "all" || img.dataset.category === filter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});
