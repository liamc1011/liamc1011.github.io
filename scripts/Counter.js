const startDate = new Date(2024, 8, 21, 4, 1); // when current website renovations started
const brickDuration = 1795; // milliseconds taken for penguin GIF to place one brick

function updateCounter() {
    const now = new Date();
    const timeElapsed = Math.floor((now - startDate) / brickDuration);
    document.getElementById("brick-count").textContent = timeElapsed.toLocaleString();
}

updateCounter();

setInterval(updateCounter, brickDuration);
