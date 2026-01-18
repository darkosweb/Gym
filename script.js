// Modal functionality for certificates
function openCerts() {
    document.getElementById("certModal").style.display = "block";
}

function closeCerts() {
    document.getElementById("certModal").style.display = "none";
}

function toggleMenu(e) {
    if (e) e.stopPropagation();
    const overlay = document.getElementById('menuOverlay');
    if (!overlay) return;
    const isOpen = overlay.classList.toggle('open');
    overlay.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close overlay when clicking outside the menu list or pressing ESC
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('menuOverlay');
    const hamburger = document.querySelector('.hamburger');
    if (!overlay) return;
    if (overlay.classList.contains('open') && !overlay.contains(e.target) && !(hamburger && hamburger.contains(e.target))) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}, { passive: true });

document.addEventListener('keydown', function(e) {
    const overlay = document.getElementById('menuOverlay');
    if (!overlay) return;
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
});