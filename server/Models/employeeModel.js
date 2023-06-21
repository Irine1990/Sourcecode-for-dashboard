const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const employeeSchema = new Schema({
    "First Name": {
        type: String,
        required: [true, "Please enter the employee FirstName"]
    },
    "Last Name": {
        type: String,
        required: [true, "Please enter the Lastname"]
    },
    Email: {
        type: String,
        required: [true, "Please enter the Email"]
    },
    Phone: {
        type: Number
    },
    Gender: {
        type: String,

    },
    Department: {
        type: String
    },
    "Job Title": {
        type: String
    },
    "Years Of Experience": {
        type: Number
    },
    Salary: {
        type: Number
    },
});

const EmployeeCollection = mongoose.model("employee", employeeSchema);

module.exports = EmployeeCollection;