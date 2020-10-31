$(function() {
    $("#devour").on("click", function(event) {
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
    $("#addFormButton").on("submit", function(event) {

        event.preventDefault();
        console.log("New burger clicked");

        let newBurger;

        if ($('#addFormData').val()) {
            newBurger = {
                burger_name: $("addFormData").val().trim(),
                devoured: 0
            };
            $.ajax('/api/burgers', {
                type: "POST",
                data: newBurger
            }).then(() => {
                //Reload page to get the updated list
                location.reload();
            });
        }



    });
});