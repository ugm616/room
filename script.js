document.addEventListener("DOMContentLoaded", function () {
    // Initialize the editor
    const editor = document.getElementById('editor');
    const grid = document.getElementById('grid');
    
    // Create a 10x10 grid for the tile map
    for (let i = 0; i < 100; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.addEventListener('click', () => {
            tile.style.backgroundColor = tile.style.backgroundColor === 'blue' ? '#444' : 'blue';
        });
        grid.appendChild(tile);
    }

    const testButton = document.getElementById('testButton');
    testButton.innerText = "Test Game";
    testButton.onclick = function () {
        alert("This will start the test game.");
    };
});
