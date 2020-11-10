$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var devourState = {
            devoured: true
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //Send POST request 
    $("#addForm").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burgerName: $("#addFormData").val().trim(),
            devoured: 0
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".deleteBurger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});