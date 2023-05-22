import React from 'react';
import { useParams } from 'react-router-dom';

const employees = [
  {
    id: 1,
    name: 'James King',
    position: 'President and CEO',
    pic: './pics/JK.jpg',
  },
  {
    id: 2,
    name: 'Julie Taylor',
    position: 'VP of Marketing',
    pic: './pics/JT.jpg',
  },
  {
    id: 3,
    name: 'Eugene Lee',
    position: 'CFO',
    pic: './pics/EL.jpg',
  },
  {
    id: 4,
    name: 'John Williams',
    position: 'VP of Engineering',
    pic: './pics/JW.jpg',
  },
  {
    id: 5,
    name: 'Ray Moore',
    position: 'VP of Sales',
    pic: './pics/RM.jpg',
  },
  {
    id: 6,
    name: 'Paul Jones',
    position: 'QA Manager',
    pic: './pics/PJ.jpg',
  },
];

function EmployeePage() {
  const { id } = useParams();
  const employee = employees.find((employee) => employee.id.toString() === id);

  if (!employee) {
    return <div>Employee not found.</div>;
  }

  return (
    <div className="entireEmployee">
      <div className="profile">
        <img src={employee.pic} alt={employee.name} className="image" />
        <div className="profileText">
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
        </div>
      </div>
      <div className="info">
        <h4>About {employee.name}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

export default EmployeePage;
