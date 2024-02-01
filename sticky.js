document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before attaching event listeners.

    // Get references to HTML elements
    var messageInput = document.getElementById("messageInput");
    var addNoteButton = document.getElementById("addNoteButton");
    var stickyNotesContainer = document.getElementById("stickyNotesContainer");

    // Attach event listener to the "Add Sticky Note" button
    addNoteButton.addEventListener("click", function () {
        addStickyNote();
    });

    function addStickyNote() {
        var message = messageInput.value.trim();

        if (message !== "") {
            var stickyNote = document.createElement("div");
            stickyNote.className = "sticky-note " + getRandomColor();
            stickyNote.textContent = message;
            stickyNotesContainer.appendChild(stickyNote);
            messageInput.value = "";
        } else {
            alert("Please enter a message before adding a sticky note.");
        }
    }

    function getRandomColor() {
        var colors = ["yellow", "blue", "pink", "green"];
        var randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
});
