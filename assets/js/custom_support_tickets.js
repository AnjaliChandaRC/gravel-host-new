document.addEventListener("DOMContentLoaded", function() {
    var recentSupportTicketsPanel = document.querySelector('.clientareadashboard .supporttickets');
    if (recentSupportTicketsPanel) {
        recentSupportTicketsPanel.innerHTML = '<div class="custom-message">' +
                                                '<h2>Custom Message</h2>' +
                                                '<p>This is a custom message to replace the recent support tickets.</p>' +
                                              '</div>';
    }
});