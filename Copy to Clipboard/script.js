$(document).ready(function () {
    // Function to fetch random text from the API
    function fetchRandomText() {
        $.ajax({
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            method: "GET",
            success: function (data) {
                $("#textField").val(data[0]);
            },
            error: function () {
                $("#textField").val("Failed to load text from the API.");
            }
        });
    }

    // Fetch and insert random text into the textarea when the document is ready
    fetchRandomText();

    // Make two functions to add and remove the class in the span
    function add() {
        $(".copied").addClass("bounce-effect");
    }
    function remove() {
        $(".copied").removeClass("bounce-effect");
    }

    // Call the functions and copy the text on button click
    $(".copy-btn").click(function () {
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
    });

    // Generate new random text on button click
    $(".generate-btn").click(function () {
        fetchRandomText();
    });
});
