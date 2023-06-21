import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmployeesAddComp() {

    const navigate = useNavigate();



    const [firstname, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");


    const processEmployee = () => {
        console.log(firstname);
        let obj = {

            "First Name": firstname,
            "Last Name": lastname,
            Email: email,


        }
        axios.post("http://localhost:5000/employees/addEmployee", obj)
            .then(response => {
                if (response.data === "Employee Added Successfully!") {
                    alert(response.data);
                    navigate("/employee");
                } else alert(response.data);
            });
    }
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input type='text' onChange={(e) => setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type='text' onChange={(e) => setLastname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type='text' onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type='number' /></td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Department:</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Job Title</td>
                        <td><input type='text' /></td>
                    </tr>

                    <tr>
                        <td>Years Of Experience:</td>
                        <td><input type='text' /></td>
                    </tr>
                    <tr>
                        <td>Salary:</td>
                        <td><input type='text'
                        /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={processEmployee}>Add Employee</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}

export default EmployeesAddComp;