import axios from "axios";

const fetchAllStudents = async () => {
  return await axios.get("https://623569244d0977f1db3b91f9.mockapi.io/api/v1/students");
}

export default fetchAllStudents;