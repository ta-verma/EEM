import React from "react";
import Navbar from "./Navbar";

const StudentDetails = () => {
  const [studentDetails, setStudentDetails] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://backend-mongo-101.herokuapp.com/api/studentdetails")
      .then((res) => res.json())
      .then((data) => {
        setStudentDetails(data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <div className="mx-52 mt-40">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Registration No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Course
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Session
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td>Loading...</td>
                </tr>
              ) : (
                studentDetails.map((student) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                      {student.registration}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                      {student.course}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                      {student.department}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                      {student.session}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
