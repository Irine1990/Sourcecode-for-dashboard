
const EmployeeModel = require('../Models/employeeModel');

const showAllEmployees = (req, res) => {
    // res.send("Show all trainees");
    try {
        EmployeeModel.find({})
            .then(employess => {
                res.json(employess);
            });

        // TraineeModel.find({}, (trainees) => {
        //     res.json(trainees);
        // });
    } catch (err) {
        res.json(err.message);
    }
};

const showEmployee = (req, res) => {
    // res.send("Show trainee");
    try {
        EmployeeModel.find({ $or: [{ "name": req.body.name }, { "age": req.body.age }, { "_id": req.body.id }] })
            .then(employees => {
                res.json(employees);
            });

        // TraineeModel.find({}, (trainees) => {
        //     res.json(trainees);
        // });
    } catch (err) {
        res.json(err.message);
    }
};

const addEmployee = async (req, res) => {
    // res.send("Add Trainee - from Routes");

    const Employee = new EmployeeModel(req.body);

    try {
        let Employees = await EmployeeModel.find({ "Email": req.body.Email });

        if (Employees.length > 0)
            res.json("Employee Already Exists!")
        else {
            await Employee.save();
            res.json("Employee Added Successfully!");
        }
    } catch (err) {
        let errorList = [];
        if (err.errors) {
            for (let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        res.json(errorList);
    }
};

const updateEmployee = (req, res) => {
    // res.send("Update Trainee - from Routes");

    try {
        EmployeeModel.updateOne({ "_id": req.body._id }, { $set: req.body })
            .then(results => {
                if (results.modifiedCount > 0) {
                    res.json("Employee Updated Successfully!");
                } else {
                    res.json("Unable to update the Employee!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

const deleteEmployee = (req, res) => {
    // res.send("Delete Trainee - from Routes");

    try {
        EmployeeModel.deleteOne({ "_id": req.body._id })
            .then(results => {
                if (results.deletedCount > 0) {
                    res.json("Employee Deleted Successfully!");
                } else {
                    res.json("Unable to delete the Employee!");
                }
            });
    } catch (err) {
        res.json(err.message);
    }
};

module.exports = {
    showAllEmployees,
    showEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}