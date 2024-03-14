import React from 'react';
import { useEffect, useState } from "react";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Dashboard = ({ id }) => {
    const Navigate = useNavigate();
     const [data, setData] = useState([]);
  //   const data = [
  //     { Day: 0, Time: 0, CourseCode : "CSE-400"},
  //     { Day: 1, Time: 1, CourseCode : "CSE-401"},
  //     { Day: 0, Time: 1, CourseCode : "CSE-401" },
  //     { Day: 1, Time: 2, CourseCode : "CSE-400" },
  //  ];
   let data1 = [];
  const getData = async () => {
    const response = await fetch(`http://localhost:5000/api/course`, {
      method: "GET",
    //  headers: { Authorization: `Bearer ${token}` },
    });
    const dat1 = await response.json();
    setData(dat1.result);
    
  };
 
  useEffect(() => {
    getData();
  }, []);
  if (data.length==0) return null;
  function generateTableRows() {
    let dp = new Array((1 << data.length) + 10);
    let mask = (1 << data.length)-1;

    function solve(ma) {
        if (dp[ma] !== undefined) {
            return dp[ma];
        }
        if(ma==mask){
           return 1;
        }
        for (let i = 0; i < data.length; i++) {
            if (ma & (1 << i)) {
                continue;
            }
            if(data[i].sessional=="false" && data1[data[i].Day][data[i].Time]==-1){
                data1[data[i].Day][data[i].Time]=data[i].CourseCode;
            }
            else if(data[i].sessional=="true" && data1[data[i].Day][data[i].Time]==-1 && data1[data[i].Day][data[i].Time+1]==-1 && data1[data[i].Day][data[i].Time+2]==-1)
            {
              data1[data[i].Day][data[i].Time]==1;
              data1[data[i].Day][data[i].Time+1]==data[i].CourseCode;
              data1[data[i].Day][data[i].Time+2]==1;
            }
            else continue;
            if (solve(ma | (1 << i))) {
                return dp[ma] = 1;
            }
            else 
            {
               if(data[i].sessional=="false"){
                data1[data[i].Day][data[i].Time]=-1;
               }
               else{
                data1[data[i].Day][data[i].Time]=-1;
                data1[data[i].Day][data[i].Time+1]=-1;
                data1[data[i].Day][data[i].Time+2]=-1;
               }
            }
        }
        return dp[ma] = 0;
    }
    
  for(let i=0;i<data.length;i++){
    console.log(data[i].CourseCode);
  }
  let maxDay = Math.max(...data.map(item => item.Day));
  let maxTime = Math.max(...data.map(item => item.Time));
  //sconsole.log(maxDay,maxTime);
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
                  {(cell === -1 || cell===1) ? "  " : `${cell}`}
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
            {generateTableRows() && printTable()}
          </tbody>
        </table>
        </>
  );
};

export default Dashboard;
