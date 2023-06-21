import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmployeesListComp() {

    const [employeeData, setEmployeeData] = useState([]);
    const [firstname, setFirstName] = useState("");

    const navigate = useNavigate();

    const fetchData = () => {
        axios.get("http://localhost:5000/employees/showAllEmployees")
            .then(response => {
                if (response.data) {
                    setEmployeeData(response.data);
                    console.log(response.data);
                }
            });
    }


    useEffect(() => {
        fetchData();
    }, []);

    const deleteEmployee = (id) => {
        let obj = {
            _id: id
        }
        axios.delete("http://localhost:5000/employees/deleteEmployee", { data: obj })
            .then(response => {
                if (response.data === "Employee Deleted Successfully!") {
                    alert(response.data);
                    fetchData();
                } else alert(response.data);
            });
    };

    const showEmployee = () => {
        console.log();
        let obj = {
            firstname: firstname,

        }
        axios.post("http://localhost:5000/employees/showEmployee", obj)
            .then(response => {
                if (response.data) {
                    setEmployeeData(response.data);
                    console.log(response.data);
                }
            });
    }

    return (
        <>
            <p>
                <button onClick={() => navigate('/employee/add/')}>Add Employee</button>
            </p>
            <p>Search: <input type='text' onChange={(e) => setFirstName(e.target.value)} /> <button onClick={showEmployee}>Search By Name</button></p>
            <table border="1" width="100%" cellSpacing="0">
                <tbody>
                    <tr><td>ID</td>
                        <td>FirstName</td>
                        <td>Lastname</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Gender</td>
                        <td>Department</td>
                        <td>Years Of Experience</td>
                        <td>Salary</td>
                        <td>Job Title</td>
                    </tr>
                    {
                        employeeData.map((employee, i) => {
                            return (
                                <tr key={i}>
                                    <td>{employee._id}</td>
                                    <td>{employee["First Name"]}</td>
                                    <td>{employee["Last Name"]}</td>
                                    <td>{employee.Email}</td>
                                    <td>{employee.Phone}</td>
                                    <td>{employee.Gender}</td>
                                    <td>{employee.Department}</td>
                                    <td>{employee["Years Of Experience"]}</td>
                                    <td>{employee.Salary}</td>
                                    <td>{employee["Job Title"]}</td>
                                    <td><a href={`/employee/edit/${employee._id}`}>Edit</a> / <button onClick={() => deleteEmployee(employee._id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default EmployeesListComp;

