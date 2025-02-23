document.addEventListener("DOMContentLoaded", () => {
    const timestamps = document.querySelectorAll(".timestamp");
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };

    timestamps.forEach((timestamp, index) => {
        const postDate = new Date(currentDate);
        postDate.setHours(currentDate.getHours() - (timestamps.length - 1 - index) * 2); // Reversed order
        timestamp.textContent = postDate.toLocaleString("en-US", options);
    });

    // Dark mode toggle logic (unchanged)
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