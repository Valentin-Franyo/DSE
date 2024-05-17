// projectshu oldalra
function ProjectsHU () {
    window.location.href = "projectsHU.html";
}

// blog oldalra
function BlogHU() {
    window.location.href = "blogHU.html"
}

// portfolio oldalra
function PortfolioHU() {
    window.location.href = "portfolioHU.html"
}

//tudorak diagnosztika
function scrollToProject() {
    var projectTitle = document.querySelector("#project-page__h2js");
    projectTitle.scrollIntoView({ behavior: "smooth" });
}
