import React, { useState } from "react";
import FormController from "./FormController";
import FormStepController from "./FormStepController";

function Form3() {
  const [formData, setFormData] = useState({
    username: "default",
    email: "default@gmail.com",
    occupation: "student",
    gender: "male",
    languages: ["html"],
  });
  const path = {
    nextpath: "/2",
    previouspath: "/",
    currentpath: "/1",
  };
  const onChangeHandler = (event) => {
    console.log(event);
    if (event.target.name === "languages") {
      let copy = { ...formData };

      if (event.target.checked) {
        copy.languages.push(event.target.value);
      } else {
        copy.languages = copy.languages.filter(
          (el) => el !== event.target.value
        );
      }

      setFormData(copy);
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);
  };
  return (
    <div>
      <div className="App">
        <form onSubmit={onSubmitHandler}>
          <FormStepController curpath={path.currentpath}></FormStepController>

          <h1>Step 2:</h1>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Father Name
            </label>
            <input
              className="form-control"
              name="username"
              onChange={onChangeHandler}
              value={formData.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Father Email
            </label>
            <input
              className="form-control"
              name="email"
              onChange={onChangeHandler}
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="occupation" className="form-label">
              Father Occupation
            </label>
            <select
              className="form-select"
              name="occupation"
              onChange={onChangeHandler}
              value={formData.occupation}
            >
              <option value="student">Student</option>
              <option value="employee">Employee</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={onChangeHandler}
                  checked={formData.gender === "male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={onChangeHandler}
                  checked={formData.gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={onChangeHandler}
                  checked={formData.gender === "other"}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Languages
            </label>
            <div>
              <div>
                <input
                  type="checkbox"
                  name="languages"
                  value="html"
                  onChange={onChangeHandler}
                  checked={formData.languages.indexOf("html") !== -1}
                />
                <label htmlFor="html">HTML</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="languages"
                  value="css"
                  onChange={onChangeHandler}
                  checked={formData.languages.indexOf("css") !== -1}
                />
                <label htmlFor="css">CSS</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="languages"
                  value="javascript"
                  onChange={onChangeHandler}
                  checked={formData.languages.indexOf("javascript") !== -1}
                />
                <label htmlFor="javascript">Javascript</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <FormController
              prevpath={path.previouspath}
              nextpath={path.nextpath}
            ></FormController>
          </div>
        </form>
        {/* <Form2></Form2> */}
      </div>
    </div>
  );
}

export default Form3;
