import { Formik } from "formik";
import * as yup from "yup";
import "./CourseAssign.css";
import { useNavigate } from "react-router-dom";

const courseSchema = yup.object().shape({
  TeacherName: yup.string().required("required"),
  Sessional: yup.string().required("required"),
  CourseCode: yup.string().required("required"),
});

const initialValuesCourse = {
  TeacherName: "",
  Sessional: "",
  CourseCode: "",
};
const CourseCoordinator = () => {
  const navigate = useNavigate();
  const formsubmit = async (values, onSubmitProps) => {
    //console.log(values);
    const loggedInResponse = await fetch(`https://cuet-class-routine.onrender.com/api/course`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    const path = `/dashboard`;
    navigate(path);
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    await formsubmit(values, onSubmitProps);
  };
  return (
    <div className="login">
                  
      <div className="loginWrapper">
      <div style={{marginTop:"40px"}}><h1 style={{color:"black", textAlign:"center",fontSize:"30px",fontWeight:"bold"}}>Assign courses</h1></div>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesCourse}
          validationSchema={courseSchema}
        >
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
           
          }) => (
            <form onSubmit={handleSubmit} className="form">
              <input
              style={{color:"black"}}
                placeholder="TeacherName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.TeacherName}
                name="TeacherName"
                className="loginInput"
              />
              <h1  style={{color:"white"}} >Sessional?</h1>
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Sessional}
                name="Sessional"
                className="loginInput"
              >
                <option value="" label="" />
                <option value="true" label="Yes" />
                <option value="false" label="No" />
              </select>
              <input
                placeholder="CourseCode"
                className="loginInput"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CourseCode}
                name="CourseCode"
              />
              <h1  style={{color:"white"}}>Course credit</h1>
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Credit}
                name="Credit"
                className="loginInput"
              >
                <option value="" label="" />
                <option value="1" label="0.75" />
                <option value="1" label="1" />
                <option value="1" label="1.5" />
                <option value="2" label="2" />
                <option value="3" label="3" />
              </select>
              <h1>Select day</h1>
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Day}
                name="Day"
                className="loginInput"
              >
                <option value="" label="" />
                <option value="0" label="Sunday" />
                <option value="1" label="Monday" />
                <option value="2" label="Tuesday" />
                <option value="3" label="Wednesday" />
                <option value="4" label="Thursday" />
              </select>
              <h1>Select time slot</h1>
              {values.Sessional != "true" && (
                <select
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Time}
                  name="Time"
                  className="loginInput"
                >
                  <option value="" label="" />
                  <option value="1" label="9:00-9:50" />
                  <option value="2" label="9:50-10:40" />
                  <option value="3" label="11:00-11:50" />
                  <option value="4" label="11:50-12:40" />
                  <option value="5" label="12:40-1:30" />
                </select>
              )}
              {values.Sessional === "true" && (
                <select
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Time}
                  name="Time"
                  className="loginInput"
                >
                  <option value="" label="" />
                  <option value="0" label="8:10-10:40" />
                  <option value="3" label="11:00-1:30" />
                  <option value="6" label="2:30-5:00" />
                </select>
              )}
              <button type="submit" className="loginButton">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default CourseCoordinator;
