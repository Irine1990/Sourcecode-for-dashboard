import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeLayoutPage from './Pages/EmployeeLayoutPage';
import EmployeesListPage from './Pages/EmployeeListPage';
import EmployeesEditPage from './Pages/EmployeeEditPage';
import EmployeesAddPage from './Pages/EmployeeAddPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeLayoutPage />}></Route>
          <Route path="/employee" element={<EmployeesListPage />}></Route>
          <Route path="/employee/add/" element={<EmployeesAddPage />}></Route>
          <Route path="/employee/edit/:id" element={<EmployeesEditPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;