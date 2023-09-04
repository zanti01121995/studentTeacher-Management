import "./content.css";
import StudentCard from "./cards";
import Form from "../form/form";
import { Route, Routes } from "react-router";
import EditForm from "../form/editform";
import Teacher from "./teacher";

function Content() {
  return (
    <div className="container content">
      <Routes>
        <Route index path="/" element={<StudentCard />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/edit" element={<EditForm />}></Route>
        <Route path="/teacher" element={<Teacher />}></Route>
      </Routes>
    </div>
  );
}
export default Content;
