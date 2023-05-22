import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import SearchBar from './SearchBar';

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

function HomePage() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="homepage">
      <h2>Employee Directory</h2>
      <SearchBar handleSearch={handleSearch} />
      <EmployeeList employees={filteredEmployees} />
      <Link to="/">Home</Link>
    </div>
  );
}

export default HomePage;
