import { useState } from "react";
import HomePage from "/src/components/HomePage/HomePage.jsx";
import EmployeePage from "/src/components/EmployeePage/EmployeePage.jsx";
import "./App.css";

function App() {
  const [currentEmployee, setCurrentEmployee] = useState({
    name: "no name",
    title: "no title",
    office: "no office",
    mobile: "no mobile",
    email: "no email",
  });

  function selectEmployee(employee) {
    console.log(employee);
    setCurrentEmployee(employee);
    // console.log(
    //   "clicked user list item to select employee (function: selectEmployee)"
    // );
  }

  return (
    <>
      <div className="app">
        {/* passing function from App.jsx to child of Homepage.jsx this will allow the data to be handed back to app.jsx and then to employeePage.jsx*/}
        {/* selectEmployee is handleUserClick in kasper's version of the app */}
        <HomePage selectEmployee={selectEmployee} />
        <EmployeePage employee={currentEmployee} />
      </div>
    </>
  );
}

export default App;
