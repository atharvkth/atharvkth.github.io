document.addEventListener("DOMContentLoaded", () => {
    // Timestamp logic with fixed dates from HTML
    const timestamps = document.querySelectorAll(".timestamp");
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };

    timestamps.forEach((timestamp) => {
        // Get the parent article's data-date attribute
        const article = timestamp.closest("article");
        const dateString = article.dataset.date;
        const postDate = dateString ? new Date(dateString) : new Date("2025-01-01T00:00:00+05:30"); // Fallback
        timestamp.textContent = `${postDate.toLocaleString("en-US", options)} IST`;
    });

    // Dark mode toggle logic
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️";
            localStorage.setItem("darkMode", "enabled");
        } else {
            toggleButton.textContent = "🌙";
            localStorage.setItem("darkMode", "disabled");
        }
    });
});