import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees }) {
  return (
    <ul className="employeelist">
      {employees.map((employee) => (
        <li key={employee.id} className="item">
          <img src={employee.pic} alt={employee.name} className="image" />
          <div className="textContainer">
            <h4>{employee.name}</h4>
            <p>{employee.position}</p>
            <Link to={`/employee/${employee.id}`}>View Details</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
