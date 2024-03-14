import React from 'react';
import { useEffect, useState } from "react";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Dashboard = ({ id }) => {
    const Navigate = useNavigate();
   // const [data, setData] = useState(null);
    const data = [
      { Day: 0, Time: 0, CourseCode : "CSE-400"},
      { Day: 1, Time: 1, CourseCode : "CSE-401"},
      { Day: 0, Time: 1, CourseCode : "CSE-401" },
      { Day: 1, Time: 2, CourseCode : "CSE-400" },
   ];
   let data1 = [];
  // const getData = async () => {
  //   // const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
  //   //   method: "GET",
  //   //   headers: { Authorization: `Bearer ${token}` },
  //   // });
  //   const data1 = await response.json();
  //   setData(data1);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  // if (!data) return null;
  
  function generateTableRows(data) {
    let dp = new Array((1 << 15) + 10);
    let mask = (1 << 4)-1;

    function solve(ma) {
        if (dp[ma] !== undefined) {
            return dp[ma];
        }
        if(ma==mask){
           return 1;
        }
        for (let i = 0; i < 4; i++) {
            if (ma & (1 << i)) {
                continue;
            }
            if(data1[data[i].Day][data[i].Time]==-1)
            {
              data1[data[i].Day][data[i].Time]=data[i].CourseCode;
            }
            else continue;
            if (solve(ma | (1 << i))) {
                return dp[ma] = 1;
            }
            else data1[data[i].Day][data[i].Time]=-1;
        }
        return dp[ma] = 0;
    }
    
    
  let maxDay = Math.max(...data.map(item => item.Day));
  let maxTime = Math.max(...data.map(item => item.Time));
  for (let i = 0; i <= maxDay; i++) {
      data1[i] = []; // Initialize each row as an empty array
      for (let j = 0; j <= maxTime; j++) {
          data1[i][j] = -1; // In
      }
  }
    return solve(0);
  }

  const printTable = () => {
    console.log(data1)
    return data1.map((row, rowIndex) => (
      <tr key={rowIndex}>
          {row.map((cell, colIndex) => (
              <td key={`${rowIndex}-${colIndex}`}>
                  {cell === -1 ? "  " : `${cell}`}
              </td>
          ))}
      </tr>
    ));
  };

  const handleClick = () => {
    // Assuming Navigate is a function that handles navigation
    // and id is a parameter for dynamic routing
    Navigate(`/form_submit`);
  };

  return (
    <>
    <div className="container">
      <button onClick={handleClick} className="loginButton"> 
        Submit Requirement
      </button>
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
            {generateTableRows(data) && printTable()}
          </tbody>
        </table>
        </>
  );
};

export default Dashboard;
