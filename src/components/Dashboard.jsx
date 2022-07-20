import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold mx-auto text-center my-20">
        PG Hostel
      </h1>
      <div className="container mx-auto p-8 justify-center flex items-center">
        <div class="max-w-sm overflow-hidden shadow-lg rounded-3xl mx-auto bg-gradient-to-r from-gray-200  to-gray-300 cursor-pointer">
          <a
            href="https://backend-mongo-101.herokuapp.com/registration"
            class="px-14 py-16 flex justify-center items-center">
            <div class="font-semibold text-3xl mb-2">Registration</div>
          </a>
        </div>
        <div class="max-w-sm overflow-hidden shadow-lg rounded-3xl mx-auto bg-gradient-to-r from-gray-200  to-gray-300 cursor-pointer">
          <a
            href="/totentries"
            class="px-14 py-16 flex justify-center items-center">
            <div class="font-semibold text-3xl mb-2">Total Entries</div>
          </a>
        </div>
        <div class="max-w-sm overflow-hidden shadow-lg rounded-3xl mx-auto bg-gradient-to-r from-gray-200  to-gray-300 cursor-pointer">
          <a
            href="/stdetails"
            class="px-14 py-16 flex justify-center items-center">
            <div class="font-semibold text-3xl mb-2">Student Entries</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
