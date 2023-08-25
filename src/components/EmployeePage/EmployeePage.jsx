import "./employeePage.css";
import Header from "../Header/Header";

export default function EmployeePage({ employee }) {
  const imageSrc = "src/assets/buttercup.png";
  return (
    <div className="employeePage">
      <Header title="Employee" />
      <div className="employeeInfoContainer">
        <div className="employeeInfo employeePageHeader">
          <img src={imageSrc} alt={employee.name} />
          <div>
            <h2>{employee.name}</h2>
            <p>{employee.title}</p>
          </div>
        </div>
        <div className="employeeInfo callOffice">
          <h3>Call Office</h3>
          <p>{employee.office}</p>
        </div>
        <div className="employeeInfo callMobile">
          <h3>Call Mobile</h3>
          <p>{employee.mobile}</p>
        </div>
        <div className="employeeInfo sms">
          <h3>SMS</h3>
          <p>{employee.mobile}</p>
        </div>
        <div className="employeeInfo email">
          <h3>Email</h3>
          <p>{employee.email}</p>
        </div>
      </div>
    </div>
  );
}
