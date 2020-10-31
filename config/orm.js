var connection = require("./connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

var orm = {
    selectAll: function(asdf, cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(burgerName, devoured, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        console.log(queryString);
        connection.query(queryString, burgerName, devoured, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(devoured, condition, cb) {
        var queryString = "UPDATE burgers SET (devoured) VALUES (?) WHERE ";
        quertString += condition;
        connection.query(queryString, [devoured], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });

    }
};

module.exports = orm;