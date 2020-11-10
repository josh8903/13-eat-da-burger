var orm = require("../config/orm.js");

var Burger = {
    selectAll: function(cb) {
        console.log("MODEL: selectAll")
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        console.log("MODEL: insertOne")
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        console.log("MODEL: updateOne", condition)
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        console.log("MODEL: delete", condition)
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = Burger;