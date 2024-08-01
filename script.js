let lastScrollTop = 0;
        const topbar = document.querySelector('.topbar');

        window.addEventListener('scroll', () => {
            let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                topbar.style.top = "-6%"; // Hide the topbar (adjust based on the height of your topbar)
            } else {
                // Scrolling up
                topbar.style.top = "0"; // Show the topbar
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
        });