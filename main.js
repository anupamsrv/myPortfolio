// Function to create stars
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize the size and position of the stars
    const size = Math.random() * 2 + 1;  // Random size between 1px and 3px
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;

    document.getElementById('stars').appendChild(star);
}

// Create 200 stars
for (let i = 0; i < 200; i++) {
    createStar();
}

// Optional: Make stars slowly move for a more dynamic background
function animateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        let xOffset = Math.random() * 0.5 - 0.25; // Small random movement
        let yOffset = Math.random() * 0.5 - 0.25;
        
        const currentX = parseFloat(star.style.left);
        const currentY = parseFloat(star.style.top);
        
        star.style.left = `${currentX + xOffset}px`;
        star.style.top = `${currentY + yOffset}px`;
    });

    requestAnimationFrame(animateStars);
}

// Start animating the stars
animateStars();

// about section tabs
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
      for (tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }
// menu button script 
var sidemenu = document.getElementById("sidemenu");
    function openmenu() {
      sidemenu.style.right = "0";
    }
    function closemenu() {
      sidemenu.style.right = "-200px";
    }