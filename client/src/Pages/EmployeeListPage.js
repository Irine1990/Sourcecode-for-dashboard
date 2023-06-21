import EmployeesListComp from "../Components/EmployeesListComp";
import { NavLink } from 'react-router-dom';

function EmployeesListPage() {
    return (
        <>
            <NavLink to="/employees">Employees</NavLink> | <NavLink to="/batch">Batches</NavLink> | <NavLink to="/class">Classes</NavLink>

            <h1>Employees- List</h1>

            <EmployeesListComp />
        </>
    )
}

export default EmployeesListPage;
