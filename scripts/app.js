// Application state
let currentGuestCount = 80;

// Tab management
function showTab(tabName) {
    // Hide all content
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected content and activate tab
    document.getElementById(tabName).classList.remove('hidden');
    event.target.classList.add('active');
    
    if (tabName === 'comparison') {
        setTimeout(updateCharts, 100);
    }
}

// Update all calculations when guest count changes
function updateCalculations() {
    currentGuestCount = parseInt(document.getElementById('guestCount').value) || 80;
    renderCaterers(lunchCaterers, 'lunchCaterers');
    renderCaterers(teabreakCaterers, 'teabreakCaterers');
    updateRecommendations();
    if (lunchChart && teabreakChart) {
        updateCharts();
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initial render
    updateCalculations();
});
