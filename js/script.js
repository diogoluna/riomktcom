
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const desktopNav = document.querySelector('.desktop-nav');

    if (mobileToggle && desktopNav) {
        mobileToggle.addEventListener('click', () => {
            // Toggle generic 'active' class for mobile menu visibility
            // Note: CSS needs update to handle .desktop-nav.active if not present
            if (desktopNav.style.display === 'flex') {
                desktopNav.style.display = 'none';
            } else {
                desktopNav.style.display = 'flex';
                desktopNav.style.flexDirection = 'column';
                desktopNav.style.position = 'absolute';
                desktopNav.style.top = '100%';
                desktopNav.style.left = '0';
                desktopNav.style.width = '100%';
                desktopNav.style.background = 'rgba(2, 11, 22, 0.95)';
                desktopNav.style.padding = '20px';
                desktopNav.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }
});
