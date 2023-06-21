const router = require('express').Router();

// Get the Controller instance
const EmployeesController = require('../Controllers/employeeControllers');

// Routes (RESTful routes)
router.get("/showAllEmployees", EmployeesController.showAllEmployees);

router.post("/showEmployee", EmployeesController.showEmployee);

router.post("/addEmployee", EmployeesController.addEmployee);

router.put("/updateEmployee", EmployeesController.updateEmployee);

router.delete("/deleteEmployee", EmployeesController.deleteEmployee);

module.exports = router;