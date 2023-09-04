import "./cards.css"; // Import your CSS file for styling
import { getstud, deletestudent } from "../crud";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  //   let Employees = [
  //     {
  //       name: "Santhosh",
  //       age: 28,
  //       gender: "Male",
  //       dob: "01-12-1995",
  //       address: "elavur",
  //       contact: "0987654321",
  //     },
  //     {
  //       name: "Santhosh",
  //       age: 28,
  //       gender: "Male",
  //       dob: "01-12-1995",
  //       address: "elavur",
  //       contact: "0987654321",
  //     },
  //     {
  //       name: "Santhosh",
  //       age: 28,
  //       gender: "Male",
  //       dob: "01-12-1995",
  //       address: "elavur",
  //       contact: "0987654321",
  //     },
  //   ];

  const [Student, setStudent] = useState([]);

  const loadEmployees = async () => {
    const response = await getstud();
    setStudent(response);
  };

  const removestudent = async (studid) => {
    await deletestudent(studid);
    const newresponse = Student.filter(({ id }) => studid !== id);
    setStudent(newresponse);
  };

  useEffect(() => {
    loadEmployees();
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ padding: "10px", display: "flex" }}>
        {Student.map(
          (data, i) => (
            i,
            (
              <div className="col-xs-12 col-sm-4">
                <div className="employee-card" key={i}>
                  <div className="employee-info">
                    <h2 className="employee-name">{data.name} </h2>

                    <p className="employee-age">Age: {data.age}</p>
                    <p className="employee-dob">Date of Birth: {data.dob}</p>
                    <p className="employee-gender">Gender: {data.gender}</p>
                    <p className="employee-address">Contact: {data.contact}</p>
                    <p className="employee-address">Address: {data.address}</p>
                    <p className="employee-address">
                      Staff Name: {data.teacher}
                    </p>
                  </div>
                  <div className="options">
                    <div
                      className="delete"
                      onClick={() => removestudent(data.id)}
                    >
                      <a>
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </div>{" "}
                    <div className="edit">
                      <Link to={`/edit?id=${data.id}`}>
                        <i className="fa-solid fa-edit"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Card;
