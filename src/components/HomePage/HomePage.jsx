import "./homePage.css";
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import EmployeeList from '../EmployeeList/EmployeeList'
export default function HomePage({selectEmployee}) {
  return (
    <div className="homePage">
      <Header title="Employee Directory"/>
      <SearchBar/>
      {/* selectEmployee is handleUserClick in kasper's version of the app */}
      <EmployeeList selectEmployee={selectEmployee}/>
    </div>
  );
}
