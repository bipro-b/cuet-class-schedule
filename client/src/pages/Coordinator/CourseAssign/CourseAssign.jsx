import { Formik } from "formik";
import * as yup from "yup";
import "./CourseAssign.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const courseSchema = yup.object().shape({
    TeacherName: yup.string().required("required"),
    TeacherCode: yup.string().required("required"),
    CourseName: yup.string().required("required"),
    CourseCode: yup.string().required("required"),
  });

  const initialValuesCourse = {
    TeacherName: "",
    TeacherCode: "",
    CourseName: "",
    CourseCode: "",
  };
  const CourseCoordinator = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formsubmit = async (values, onSubmitProps) => {
       console.log(values);
        // const loggedInResponse = await fetch(`http://localhost:5000/api/course`, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(values),
        // });
       // const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        // if (loggedIn.user) {
        //   const name=loggedIn.user.firstName+" "+loggedIn.user.lastName;
        //   dispatch(
        //     setLogin({
        //       user: loggedIn.user,
        //       id: loggedIn.user._id,
        //       name: name,
        //       token: loggedIn.token,
        //     })
        //   );
        //   const id=loggedIn.user._id;
        //   const path = `/profile/${id}`;
        const path = `/`;
          navigate(path);
        // }
        // else{
        //   alert("Wrong email or password");
        // }
      };
     const handleFormSubmit = async (values, onSubmitProps) => {
        await formsubmit(values, onSubmitProps);
      };
    return(
      
                <div className="login">
                    <div className="loginWrapper">
                       
                          <Formik
                              onSubmit={handleFormSubmit}
                              initialValues={initialValuesCourse}
                              validationSchema={courseSchema}
                              >
                              {({
                                  values,
                                  errors,
                                  touched,
                                  handleBlur,
                                  handleChange,
                                  handleSubmit,
                                  setFieldValue,
                                  resetForm,
                              }) => (
                                  <form onSubmit={handleSubmit} className="form">
                                        <input placeholder="TeacherName" 
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      value={values.TeacherName}
                                      name="TeacherName"
                                      className="loginInput"
                                      />
                                      <input placeholder="TeacherCode"
                                      className="loginInput"
                                      type="TeacherCode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.TeacherCode}
                                        name="TeacherCode"
                                        />
                                        <input placeholder="CourseName" 
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      value={values.CourseName}
                                      name="CourseName"
                                      className="loginInput"
                                      />
                                      <input placeholder="CourseCode"
                                      className="loginInput"
                                      type="TeacherCode"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.CourseCode}
                                        name="CourseCode"
                                        />
                                        <h1>Select day</h1>
                                      <select
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.Day}
                                        name="Day"
                                        className="loginInput"
                                      >
                                        <option value="" label="" />
                                        <option value="Sunday" label="Sunday" />
                                         <option value="Monday" label="Monday" />
                                        </select>
                                      <h1>Select time slot</h1>
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
                                        </select>
                                      <button 
                                      type="submit"
                                      className="loginButton"
                                      >Submit</button>
                                       </form>
                                        )}
                                    </Formik> 
                    </div>
                </div>
    )
};
export default CourseCoordinator;
