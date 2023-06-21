import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EmployeesEditComp() {

    const q = useParams();

    const navigate = useNavigate();

    const [id, setId] = useState(q.id);
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        let obj = {
            _id: id,
        }
        axios.post("http://localhost:5000/employees/showEmployee", obj)
            .then(response => {
                if (response.data) {
                    setFirstName(response.data[0]["First Name"]);
                    setLastname(response.data[0]["Last Name"]);
                    setEmail(response.data[0].Email);

                }
            });
    }, []);

    const processEmployee = () => {
        let obj = {
            _id: q.id,
            "First Name": firstname,
            "Last Name": lastname,
            Email: email,

        }
        axios.put("http://localhost:5000/employees/updateEmployee", obj)
            .then(response => {
                if (response.data === "Employee Updated Successfully!") {
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
                        <td>FirstName:</td>
                        <td><input type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Lastnamename:</td>
                        <td><input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Department:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Job Title:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>

                    <tr>
                        <td>Year OF Experience:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td>Salary:</td>
                        <td><input type='text' onChange="" /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button onClick={processEmployee}>Add Employee</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}

export default EmployeesEditComp;

