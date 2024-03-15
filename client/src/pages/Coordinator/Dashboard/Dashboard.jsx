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
  //     { Day: 0, Time: 2, CourseCode : "CSE-400", Sessional: "false"},
  //     { Day: 1, Time: 1, CourseCode : "CSE-401", Sessional: "false"},
  //     { Day: 0, Time: 1, CourseCode : "CSE-401", Sessional: "false" },
  //     { Day: 1, Time: 2, CourseCode : "CSE-400", Sessional: "false" },
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
           // alert(typeof(data1[data[i].Day][data[i].Time+1]));
            if(!data[i].Sessional && data1[data[i].Day][data[i].Time]==-1){
                data1[data[i].Day][data[i].Time]=data[i].CourseCode;
            }
            else if(data[i].Sessional && data1[data[i].Day][data[i].Time]==-1 && data1[data[i].Day][data[i].Time+1]==-1 && data1[data[i].Day][data[i].Time+2]==-1)
            {
              data1[data[i].Day][data[i].Time]=data[i].CourseCode;
              data1[data[i].Day][data[i].Time+1]=data[i].CourseCode;
              data1[data[i].Day][data[i].Time+2]=data[i].CourseCode;
            }
            else continue;
            if (solve(ma | (1 << i))) {
                return dp[ma] = 1;
            }
            else 
            {
               if(!data[i].Sessional){
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
    
 
  //sconsole.log(maxDay,maxTime);
  for (let i = 0; i <= 4; i++) {
      data1[i] = []; // Initialize each row as an empty array
      for (let j = 0; j <= 8; j++) {
          data1[i][j] = -1; // In
      }
  }
   let result=solve(0);
   console.log(result);
   let dat=["Sun","Mon","Tue","Wed","Thu"];
   //alert(result);
   let cnt=-1;
   function f()
   {
      cnt++;
      return dat[cnt];
   }
    return data1.map((row, rowIndex) => (
      <tr key={rowIndex}>
          <td>{f()}</td>
          {row.map((cell, colIndex) => (
              <td key={`${rowIndex}-${colIndex}`}>
                  {(cell === -1 || cell===1) ? "  " : `${cell}`}
              </td>
          ))}
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
      <button onClick={handleClick} className="loginButton"> 
        Submit Requirement
      </button>
      </div>
      
        <table className="dynamic-table">
          <thead>
            <tr>
              <th>Period/time</th>
              <th>8:10-9:00</th>
              <th>9:00-9:50</th>
              <th>9:50-10:40</th>
              <th>11:00-1:50</th>
              <th>11:50-12:40</th>
              <th>12:40-1:30</th>
              <th>2:30-3:20</th>
              <th>3:20-4:10</th>
              <th>4:10-5:00</th>
            </tr>
          </thead>
          <tbody>
            {generateTableRows()}
          </tbody>
        </table>
        </>
  );
};

export default Dashboard;
