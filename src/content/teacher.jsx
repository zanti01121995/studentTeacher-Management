import { useEffect, useState } from "react";
import { getstud } from "../crud";

const Teacher = () => {
  const [students, setstudents] = useState([]);
  const loadEmployees = async () => {
    const response = await getstud();
    setstudents(response);
  };
  useEffect(() => {
    loadEmployees();
  }, []);
  {
    return (
      <>
        <h4>Teacher's assigned for the corresponding Students</h4>
        {students.map(
          (ele, i) => (
            i,
            (
              <div>
                Student Name: {ele.name}
                {"--------->"} Teacher Name:{ele.teacher}{" "}
              </div>
            )
          )
        )}
      </>
    );
  }
};

export default Teacher;
