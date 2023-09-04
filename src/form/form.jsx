import { useState } from "react";

import "./form.css";
import { createstud } from "../crud";
function Form() {
  const intialValues = {
    name: "",
    dob: "",
    age: "",
    address: "",
    gender: "",
    contact: "",
    teacher: "",
  };
  const [formData, setFormData] = useState(intialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any necessary actions with the form data
    console.log(formData);
    createstud(formData);
    console.log(formData);
    setFormData(intialValues);
  };

  const handleclear = () => {
    setFormData(intialValues);
  };

  return (
    <div className="main">
      <div className="form-content">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Student Registration form</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Enter your name."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                  placeholder="Enter your age."
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  className="form-control browser-default custom-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="Date">Date Of Birth</label>
                <input
                  type="Date"
                  name="dob"
                  className="form-control"
                  id="Date"
                  placeholder=""
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 form-group">
                <label htmlFor="teacher">Assingned Teacher</label>
                <input
                  type="text"
                  className="form-control"
                  name="teacher"
                  id="teacher"
                  placeholder="Enter teacher name."
                  value={formData.teacher}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="contact">Contact No</label>
                <input
                  type="number"
                  className="form-control"
                  name="contact"
                  id="contact"
                  placeholder="Enter your contact number."
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              {/* <div className="col-sm-6 form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email."
                required
              />
            </div> */}
              <div className="col-sm-12 form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Enter your address."
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row">
                <div
                  className="col-sm-6 col-sm-3 form-group py-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="btn btn-primary"
                    style={{ width: "400px" }}
                  >
                    Submit
                  </button>
                </div>
                <div
                  className="col-sm-6 col-sm-3 form-group py-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="btn btn-danger"
                    onClick={handleclear}
                    style={{ width: "400px" }}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;
