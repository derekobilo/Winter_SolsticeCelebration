// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in the nav
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('#main-nav ul li');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.querySelector('a').getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});

// Show the Back to Top arrow when scrolling down
window.onscroll = function() {
    var topButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = " ";
    } else {
        topButton.style.display = "none";
    }
};

// Snowflake Generator
const snowContainer = document.createElement('div');
snowContainer.style.position = 'fixed';
snowContainer.style.top = '0';
snowContainer.style.left = '0';
snowContainer.style.width = '200vw';
snowContainer.style.height = '200vh';
snowContainer.style.pointerEvents = 'none';
snowContainer.style.overflow = 'hidden';
document.body.appendChild(snowContainer);

// Falling snow
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 12 + 's'; // 12-15 seconds
    snowflake.style.opacity = Math.random(); // Snowflake opacity
    snowflake.style.fontSize = (Math.random() * 10 + 20) + 'px'; // Increased snowflake size
    snowflake.style.color = '#ffffff'; // Snowflake color
    snowflake.innerText = '❄'; // Snowflake character
    snowContainer.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove(); // Remove snowflake after animation ends
    }, 5000); // Snowflake lifespan
};

// Create snowflakes every 100 ms
setInterval(createSnowflake, 100);
