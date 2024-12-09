document.addEventListener("DOMContentLoaded", function () {
    // Initialize the editor
    const editor = document.getElementById('editor');
    const title = document.createElement('h1');
    title.innerText = "ROOM - EDITOR";
    editor.appendChild(title);

    const testButton = document.createElement('button');
    testButton.innerText = "Test Game";
    testButton.onclick = function () {
        alert("This will start the test game.");
    };
    editor.appendChild(testButton);
});
