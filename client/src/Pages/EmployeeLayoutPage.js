import { NavLink } from 'react-router-dom';

function EmployeeLayoutPage() {
    return (
        <>
            <NavLink to="/employee">Employee</NavLink> | <NavLink to="/batch">Batches</NavLink> | <NavLink to="/class">Classes</NavLink>
        </>
    )
}

export default EmployeeLayoutPage;