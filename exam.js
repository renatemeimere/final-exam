const paths = document.querySelectorAll("path");
paths.forEach(drawLines)

function drawLines(path, index) {
    setTimeout(function () {
        path.classList.add("drawSVG")
    }, index * 1000);
}
