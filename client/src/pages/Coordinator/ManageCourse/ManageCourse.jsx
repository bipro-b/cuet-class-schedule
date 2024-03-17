import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ManageCourse.css";
const ManageCourse = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://l-tech-server.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  // delete car
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `https://l-tech-server.onrender.com/course/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted successfully");
            const remaining = cars.filter((car) => car._id !== id);
            setCars(remaining);
          }
        });
    }
  };

  return (
    <>
      <div className="mem">
        <h3
          style={{
            color: "white",
            backgroundColor: "#207398",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Manage all Courses
        </h3>
        <div className="title">
          <div>Course</div>
          <div>Course Code</div>
          <div>Updation</div>
          <div>Deletion</div>
        </div>
        {cars.map((car) => (
          <div className="edit my-2 " key={car._id}>
            <div style={{ textAlign: "left", marginLeft: "10px" }}>
              <img
                src={car.img}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                alt=""
              />{" "}
              {car.name}
            </div>
            <div>{car.price}</div>

            <div>Update</div>
            <div>
              <Button onClick={() => handleDelete(car._id)} variant="text">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManageCourse;