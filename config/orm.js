var connection = require("./connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(burgerName, devoured) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        console.log(queryString);
        connection.query(queryString, burgerName, devoured, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;