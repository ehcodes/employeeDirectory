import "./employeeListItem.css";

export default function EmployeeListItem({
  employeeName,
  employeeTitle,
  employeeOffice,
  employeeMobile,
  employeeEmail,
  selectEmployee,
}) {
  const imageSrc = "src/assets/buttercup.png";
  return (
    <>
      {/* react needs an invoked function being used on an event handler to be wrapped within another function to prevent it from being invoked immediately */}
      <div
        onClick={() => {
          selectEmployee({
            name: employeeName,
            title: employeeTitle,
            office: employeeOffice,
            mobile: employeeMobile,
            email: employeeEmail,
          });
        }}
        className="employeeListItem"
      >
        <img src={imageSrc} alt={employeeName} />
        <div>
          <h2>{employeeName}</h2>
          <p>{employeeTitle}</p>
        </div>
      </div>
    </>
  );
}
