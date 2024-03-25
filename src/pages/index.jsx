import { useEffect, useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Forms from "../components/forms";
import Select from "../components/select";
import JsnData from "../data/datas.json";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Index() {
  const [Open, setIsOpen] = useState(false);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    document.title = "HRnet - index page";
  });
  console.log(value);
  return (
    <>
      <Header>HRnet</Header>
      <main className="main_index">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form className="main_index__form">
          <div className="main_index__div">
            <Forms
              htmlFor="first-name"
              className="main_index__label"
              type="text"
              name="first-name"
              id="first-name"
            >
              First Name
            </Forms>
            <Forms
              htmlFor="last-name"
              className="main_index__label"
              type="text"
              name="last-name"
              id="last-name"
            >
              Last Name
            </Forms>
            <Forms
              htmlFor="date-of-birth"
              className="main_index__label"
              type="text"
              name="date-of-birth"
              id="date-of-birth"
              value={value}
              onFocus={(e) => {
                e.stopPropagation(), setIsOpen(!Open);
              }}
              onChange={setValue}
              // onBlur={(e) => {
              //   e.stopPropagation(), setIsOpen(!Open);
              // }}
            >
              Date of Birth
            </Forms>
            {Open ? <Calendar onChange={setValue} value={value} /> : null}
            <Forms
              htmlFor="start-date"
              className="main_index__label"
              type="text"
              name="start-date"
              id="start-date"
            >
              Start Date
            </Forms>
          </div>
          <fieldset>
            <legend>Address</legend>
            <p className="main_index__p">
              <Forms
                htmlFor="street"
                className="main_index__label"
                type="text"
                name="street"
                id="street"
              >
                Street
              </Forms>
              <Forms
                htmlFor="city"
                className="main_index__label"
                type="text"
                name="city"
                id="city"
              >
                City
              </Forms>
              <Select
                htmlFor="state"
                className="main_index__label"
                name="state"
                id="state"
                className2="main_index__select"
              >
                {"State"}
                {JsnData[0].optionState.map((el) => (
                  <option value={el.value} key={el.id}>
                    {el.children}
                  </option>
                ))}
              </Select>
              <Forms
                htmlFor="zip-code"
                className="main_index__label"
                type="number"
                name="zip-code"
                id="zip-code"
              >
                Zip Code
              </Forms>
            </p>
          </fieldset>
          <p className="main_index__p">
            <Select
              htmlFor="department"
              className="main_index__label"
              name="department"
              id="department"
              className2="main_index__select"
            >
              {"Department"}
              {JsnData[0].departmentState.map((el) => (
                <option key={el.id}>{el.children}</option>
              ))}
            </Select>
          </p>
          <button type="submit" className="main_index__btn">
            Save
          </button>
        </form>
      </main>
    </>
  );
}
