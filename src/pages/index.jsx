import { useEffect, useState, useRef } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import Forms from "../components/forms";
import { Select } from "@zkine/react-select";
import JsnData from "../data/datas.json";
import Calendar from "../components/calendar";
import Modal from "../components/modal";
import "react-calendar/dist/Calendar.css";
import { useStore } from "react-redux";

export default function Index() {
  const store = useStore();
  const [OpenBirth, setIsOpenBirth] = useState(false);
  const [valueBirth, setValueBirth] = useState("");
  const [OpenDay, setIsOpenDay] = useState(false);
  const [valueDay, setValueDay] = useState("");
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const formRefBirth = useRef(null);
  const formRefDay = useRef(null);

  useEffect(() => {
    document.title = "HRnet - index page";
  });

  function formatDate(e) {
    const date = new Date(e);
    if (OpenBirth) {
      return setValueBirth(
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(date)
      );
    } else if (OpenDay) {
      return setValueDay(
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(date)
      );
    }
  }

  function handleClickEvent() {
    if (
      document.activeElement !== formRefBirth.current &&
      document.activeElement !== formRefDay.current
    ) {
      setIsOpenBirth(false);
      setIsOpenDay(false);
    } else if (
      document.activeElement !== formRefDay.current &&
      document.activeElement === formRefBirth.current
    ) {
      setIsOpenBirth(true);
      setIsOpenDay(false);
    }
  }

  function handleUpdateList(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    store.dispatch({ type: "ADD_LISTE", payload: formJson });
  }

  function openModal() {
    return setmodalIsOpen(true);
  }

  function closeModal() {
    return setmodalIsOpen(false);
  }

  return (
    <div onClick={(e) => (OpenBirth || OpenDay ? handleClickEvent(e) : null)}>
      <Header>HRnet</Header>
      <main className="main_index">
        <Link to="/employee-list">View Current Employees</Link>
        <h2 className="main_index__h2">Create Employee</h2>
        <form onSubmit={handleUpdateList} className="main_index__form">
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
              ref={formRefBirth}
              htmlFor="date-of-birth"
              className="main_index__label"
              type="text"
              name="date-of-birth"
              id="date-of-birth"
              value={valueBirth}
              onFocus={(e) => {
                e.stopPropagation(), setIsOpenBirth(!OpenBirth);
              }}
              onChange={(e) => formatDate(e.target.value)}
            >
              Date of Birth
            </Forms>
            {OpenBirth ? (
              <>
                <Calendar
                  onChange={(e) => {
                    formatDate(e), setIsOpenBirth(!OpenBirth);
                  }}
                />
              </>
            ) : null}
            <Forms
              ref={formRefDay}
              htmlFor="start-date"
              className="main_index__label"
              type="text"
              name="start-date"
              id="start-date"
              value={valueDay}
              onFocus={(e) => {
                e.stopPropagation(), setIsOpenDay(!OpenDay);
              }}
              onChange={(e) => formatDate(e.target.value)}
            >
              Start Date
            </Forms>
            {OpenDay ? (
              <>
                <Calendar
                  onChange={(e) => {
                    formatDate(e), setIsOpenDay(!OpenDay);
                  }}
                />
              </>
            ) : null}
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
          <button type="submit" className="main_index__btn" onClick={openModal}>
            Save
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            onClick={closeModal}
          />
        </form>
      </main>
    </div>
  );
}
