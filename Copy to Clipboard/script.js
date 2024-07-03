$(document).ready(function () {
    // Function to fetch random text from the API
    function fetchRandomText() {
        $.ajax({
            url: "https://baconipsum.com/api/?type=meat-and-filler", // URL of the API
            method: "GET", // HTTP method
            success: function (data) {
                // On success, insert the first paragraph of the returned text into the textarea
                $("#textField").val(data[0]);
            },
            error: function () {
                // On error, show a failure message
                $("#textField").val("Failed to load text from the API.");
            }
        });
    }

    // Fetch and insert random text into the textarea when the document is ready
    fetchRandomText();

    // Function to add the bounce effect to the copied span
    function add() {
        $(".copied").addClass("bounce-effect");
    }
    // Function to remove the bounce effect from the copied span
    function remove() {
        $(".copied").removeClass("bounce-effect");
    }

    // Copy the text to clipboard and show the bounce effect on button click
    $(".copy-btn").click(function () {
        $("#textField").select(); // Select the text
        document.execCommand("copy"); // Copy the text to clipboard
        add(); // Add the bounce effect
        setTimeout(remove, 800); // Remove the bounce effect after 800ms
    });

    // Generate new random text on button click
    $(".generate-btn").click(function () {
        fetchRandomText(); // Fetch new random text
    });
});
