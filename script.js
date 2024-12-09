document.addEventListener("DOMContentLoaded", function () {
    const editor = document.getElementById('editor');
    const grid = document.getElementById('grid');

    // Create a 100x100 grid for the tile map
    for (let i = 0; i < 10000; i++) {
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

    // Implement zoom functionality
    let scale = 1;
    window.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            scale *= 1.1;
        } else {
            scale /= 1.1;
        }
        grid.style.transform = `scale(${scale})`;
    });

    // Implement scroll functionality
    let posX = 0;
    let posY = 0;
    let isDragging = false;
    let startX, startY;

    grid.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.pageX - posX;
        startY = event.pageY - posY;
        grid.classList.add('dragging');
    });

    grid.addEventListener('mousemove', (event) => {
        if (isDragging) {
            posX = event.pageX - startX;
            posY = event.pageY - startY;
            grid.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
        }
    });

    grid.addEventListener('mouseup', () => {
        isDragging = false;
        grid.classList.remove('dragging');
    });

    grid.addEventListener('mouseleave', () => {
        isDragging = false;
        grid.classList.remove('dragging');
    });
});
