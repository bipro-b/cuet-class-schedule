import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./ManageCourse.css";

const ManageCourse = () => {
  const [course, setCourse] = useState([]);
  const [editedCourses, setEditedCourses] = useState([]);

  useEffect(() => {
    fetch("https://cuet-class-routine.onrender.com/api/course")
      .then((res) => res.json())
      .then((data) => {
        setCourse(data.result);
        // Initialize editedCourses state with empty objects for each course item
        setEditedCourses(Array(data.result.length).fill({}));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

 // delete assign
const handleDelete = (id) => {
  const proceed = window.confirm("Are you sure you want to delete?");
  if (proceed) {
    const url = `https://cuet-class-routine.onrender.com/api/course/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status==="Success") {
          alert("Deleted successfully");
          // Update state using functional form of setCourse
          setCourse(prevCourse => prevCourse.filter((assign) => assign._id !== id));
          // Reload the page
          window.location.reload();

        }
      })
      .catch((error) => console.error("Error deleting data:", error));
  }
};


  // update assign
  const handleUpdate = (id, index) => {
    const updatedCourse = editedCourses[index];
    const url = `https://cuet-class-routine.onrender.com/api/course/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.updatedCount) {
          alert("Updated successfully");
          // Fetch updated course data
          fetch("https://cuet-class-routine.onrender.com/api/course")
            .then((res) => res.json())
            .then((data) => {
              setCourse(data.result);
              // Reset editedCourses state for the updated course item
              setEditedCourses((prevEditedCourses) => {
                const newEditedCourses = [...prevEditedCourses];
                newEditedCourses[index] = {};
                return newEditedCourses;
              });
            })
            .catch((error) => console.error("Error fetching data:", error));
        }
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  // handle input change for editing course
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setEditedCourses((prevEditedCourses) => {
      const newEditedCourses = [...prevEditedCourses];
      newEditedCourses[index] = {
        ...newEditedCourses[index],
        [name]: value,
      };
      return newEditedCourses;
    });
  };

  return (
    <div className="mem">
      <h3
        style={{
          color: "white",
          backgroundColor: "#207398",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Manage all Courses
      </h3>
      <div className="title">
        <div>Course Code</div>
        <div>Teacher Name</div>
        <div>Credit</div>
        <div>Sessional</div>
        <div>Actions</div>
      </div>
      {course.map((assign, index) => (
        <div className="edit my-2" key={assign._id}>
          <div>
            <TextField
              name="CourseCode"
              value={editedCourses[index].CourseCode || assign.CourseCode}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <TextField
              name="TeacherName"
              value={editedCourses[index].TeacherName || assign.TeacherName}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <TextField
              name="Credit"
              value={editedCourses[index].Credit || assign.Credit}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <TextField
              name="Sessional"
              value={editedCourses[index].Sessional || assign.Sessional}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
          <div>
            <Button
              onClick={() => handleUpdate(assign._id, index)}
              variant="contained"
            >
              Update
            </Button>
            <Button
              style={{ marginLeft: "5px" }}
              onClick={() => handleDelete(assign._id)}
              variant="contained"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageCourse;
