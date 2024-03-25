import { useEffect } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Forms from "../components/forms";
import Select from "../components/select";
import JsnData from "../data/datas.json";

export default function EmployeeList() {
  useEffect(() => {
    document.title = "HRnet - employee-list page";
  });

  return (
    <>
      <Header>Current Employees</Header>
      <main className="main_list">
        <section className="main_list__div_show">
          <div>
            <Select
              htmlFor="show"
              className="main_list__label"
              name="show"
              id="show"
              className2="main_list__select"
            >
              {"Show"}
              {JsnData[0].showState.map((el) => (
                <option key={el.id}>{el.children}</option>
              ))}
            </Select>
            {"entries"}
          </div>
          <div>
            <Forms
              htmlFor="search"
              className="main_list__label"
              type="search"
              name="search"
              id="search"
            >
              Search:
            </Forms>
          </div>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No data available in table</td>
              </tr>
            </tbody>
          </table>
        </section>
        <div>
          <p>Showing 0 to 0 of 0 entries</p>
          <div>
            <button>Previous</button>
            <button>Next</button>
          </div>
          <Link to="/">Home</Link>
        </div>
      </main>
    </>
  );
}
