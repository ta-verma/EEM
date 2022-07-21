import React from "react";
import Navbar from "./Navbar";

const StudentEntries = () => {
  const [studentEntriesBkp, setStudentEntriesBkp] = React.useState([]);
  const [studentDetails, setStudentDetails] = React.useState([]);
  const [studentEntries, setStudentEntries] = React.useState([]);
  const [searchRegNo, setSearchRegNo] = React.useState("");
  const [searchOption, setSearchOption] = React.useState("registration");
  const [isLoading, setIsLoading] = React.useState(true);
  //   const [course, setCourse] = React.useState("");

  const changeFruit = (search) => {
    setSearchOption(search);
  };

  React.useEffect(() => {
    fetch("https://backend-mongo-101.herokuapp.com/api/entries")
      .then((res) => res.json())
      .then((data) => {
        setStudentEntries(data);
        setStudentEntriesBkp(data);
        setIsLoading(false);
      });

    fetch("https://backend-mongo-101.herokuapp.com/api/studentdetails")
      .then((res) => res.json())
      .then((data) => {
        setStudentDetails(data);
        setIsLoading(false);
      });
    setStudentEntries(
      studentEntriesBkp.map((item) => {
        return {
          ...item,
          studentDetails: studentDetails.find(
            (s) => s._id === item.registration
          ),
        };
      })
    );

    console.log(studentEntries);
  }, [studentEntriesBkp, studentDetails]);

  return (
    <div>
      <div>
        <Navbar />
        <div className="mx-52 mt-40">
          <form>
            <select
              onChange={(event) => changeFruit(event.target.value)}
              value={searchOption}>
              <option value="registration">Registration</option>
              <option value="name">Name</option>
              <option value="course">course</option>
              <option value="date">date</option>
            </select>
          </form>
          <input
            type="text"
            placeholder="Search by registration no"
            onChange={(e) => {
              setSearchRegNo(e.target.value);
            }}
          />
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Registration No
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Course
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Time_OUT
                </th>
                <th scope="col" class="px-6 py-3">
                  Time_IN
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td>Loading...</td>
                </tr>
              ) : (
                <>
                  {searchRegNo
                    ? studentEntries
                        .filter((student) => {
                          if (searchOption === "registration") {
                            console.log(searchOption);
                            if (
                              studentDetails.find(
                                (studentDetail) =>
                                  studentDetail._id === student.registration
                              )?.registration === searchRegNo
                            ) {
                              return student;
                            }
                          } else if (searchOption === "name") {
                            if (
                              studentDetails.find(
                                (studentDetail) =>
                                  studentDetail._id === student.registration
                              )?.name === searchRegNo
                            ) {
                              return student;
                            }
                          } else if (searchOption === "course") {
                            if (
                              studentDetails.find(
                                (studentDetail) =>
                                  studentDetail._id === student.registration
                              )?.course === searchRegNo
                            ) {
                              return student;
                            }
                          } else if (searchOption === "date") {
                            if (student.date === searchRegNo) return student;
                          }
                        })
                        .map((student) => (
                          <tr
                            key={student._id}
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                              {
                                studentDetails.find(
                                  (studentDetail) =>
                                    studentDetail._id === student.registration
                                )?.registration
                              }
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                              {
                                studentDetails.find(
                                  (studentDetail) =>
                                    studentDetail._id === student.registration
                                )?.name
                              }
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                              {
                                studentDetails.find(
                                  (studentDetail) =>
                                    studentDetail._id === student.registration
                                )?.course
                              }
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                              {student.date}
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                              {student.timeIn}
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                              {student.timeOut}
                            </td>
                          </tr>
                        ))
                    : studentEntries.map((student) => (
                        <tr
                          key={student._id}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                            {
                              studentDetails.find(
                                (studentDetail) =>
                                  studentDetail._id === student.registration
                              )?.registration
                            }
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                            {
                              studentDetails.find(
                                (studentDetail) =>
                                  studentDetail._id === student.registration
                              )?.name
                            }
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                            {
                              studentDetails.find(
                                (studentDetail) =>
                                  studentDetail._id === student.registration
                              )?.course
                            }
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                            {student.date}
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                            {student.timeIn}
                          </td>
                          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700">
                            {student.timeOut}
                          </td>
                        </tr>
                      ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentEntries;
