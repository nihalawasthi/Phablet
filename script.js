window.addEventListener("resize", function () {
    if (window.innerWidth > window.innerHeight) {
        document.getElementById("container").style.height = "100vh";
    } else {
        document.getElementById("container").style.height = "auto";
    }
});

function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    var iconElement = document.getElementById("switch").getElementsByTagName("i")[0];
    var viewerContainer = document.getElementById("container");

    // Remove existing spline-viewer
    viewerContainer.innerHTML = '';

    if (body.classList.contains("dark-mode")) {
        iconElement.innerHTML = '&#xf186;';
        iconElement.classList.remove("material-icons");
        iconElement.classList.add("fa");
        createSplineViewer("https://prod.spline.design/J7UmrpD2GUpRdEUW/scene.splinecode");
    } else {
        iconElement.innerHTML = '&#xe430;';
        iconElement.classList.remove("fa");
        iconElement.classList.add("material-icons");
        createSplineViewer("https://prod.spline.design/yhPrEjjGmAYNZdEm/scene.splinecode");
    }
}

function createSplineViewer(url) {
    var viewerContainer = document.getElementById("container");
    var newViewer = document.createElement("spline-viewer");
    newViewer.setAttribute("id", "particles");
    newViewer.setAttribute("url", url);
    viewerContainer.appendChild(newViewer);
}

const container = document.querySelector('.container');

container.addEventListener('click', function () {
    this.classList.toggle('rotated');
});