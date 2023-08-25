import "./employeeList.css";
import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";

export default function EmployeeList({ selectEmployee }) {
  const employeeList = [
    {
      name: "Janelle King",
      title: "President and CEO",
      office: "617-885-9934",
      mobile: "781-885-9934",
      email: "jking@fakeemail.com",
    },
    {
      name: "Julie Taylor",
      title: "VP of Marketing",
      office: "617-885-9934",
      mobile: "781-885-9934",
      email: "jtaylor@fakeemail.com",
    },
    {
      name: "Euphemia Lee",
      title: "CFO",
      office: "617-885-9934",
      mobile: "781-885-9934",
      email: "elee@fakeemail.com",
    },
    {
      name: "Janice Williams",
      title: "VP of Engineering",
      office: "617-885-9934",
      mobile: "781-885-9934",
      email: "jwilliams@fakeemail.com",
    },
    {
      name: "Raven Moore",
      title: "VP of Sales",
      office: "617-885-9934",
      mobile: "781-885-9934",
      email: "rmoore@fakeemail.com",
    },
    {
      name: "Paula Jones",
      title: "QA Manager",
      office: "617-885-9934",
      mobile: "781-885-9934",
      email: "pjones@fakefakeemail.com",
    },
  ];
  return (
    <>
      <div className="employeeList">
        {employeeList.map((employee) => {
          return (
            /* selectEmployee is handleUserClick in kasper's version of the app */
            <EmployeeListItem
              selectEmployee={selectEmployee}
              employeeName={employee.name}
              employeeTitle={employee.title}
              employeeOffice={employee.office}
              employeeMobile={employee.mobile}
              employeeEmail={employee.email}
            />
          );
        })}
      </div>
    </>
  );
}
