import React from 'react';
import "../../Coordinator/Dashboard/Dashboard.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AssignedCourse = ({ id }) => {
    const Navigate = useNavigate();
  const data = [
    { name: "John", age: 30, country: "USA" },
    { name: "Alice", age: 25, country: "UK" },
    { name: "Bob", age: 35, country: "Canada" }
  ];

  function generateTableRows(data) {
    return data.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.country}</td>
      </tr>
    ));
  }

  const handleClick = () => {
    // Assuming Navigate is a function that handles navigation
    // and id is a parameter for dynamic routing
    Navigate(`/form_submit`);
  };

  return (
    <>
    <div className="container">
      </div>
      
        <table className="dynamic-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {generateTableRows(data)}
          </tbody>
        </table>
        </>
  );
};

export default AssignedCourse;
