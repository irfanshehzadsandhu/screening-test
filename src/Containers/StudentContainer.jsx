import React, {useEffect, useState} from "react";
import Student from "../Components/Student";
import fetchAllStudents from "../Services/StudentService";

const StudentContainer = (props) => {
  const [students, setStudents] = useState([]);
  const fetchStudentData = () => {
    fetchAllStudents().then((response) => {
      setStudents(response.data);
    })
  }


  useEffect(() => {
    fetchStudentData();
  }, [])
  return <Student students={students}/>
}
export default StudentContainer