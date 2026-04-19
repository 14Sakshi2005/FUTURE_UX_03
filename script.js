// Highlight active sidebar link
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.style.color = "#d1d5db");
        this.style.color = "white";
    });
});

// Search input log
const search = document.querySelector(".search");

search.addEventListener("keyup", function () {
    console.log("Searching:", this.value);
});

// Lead click interaction
const leads = document.querySelectorAll(".lead");

leads.forEach(lead => {
    lead.addEventListener("click", () => {
        alert("Opening Lead Details...");
    });
});
