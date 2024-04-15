import { useRef } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";

export default function CalendarInput({ onChange }) {
  const calendarRef = useRef();

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Calendar locale="en-GB" ref={calendarRef} onChange={onChange} />
      <button
        type="button"
        onClick={() => {
          const dateToSet = new Date();
          calendarRef.current.setActiveStartDate(dateToSet);
        }}
      >
        {"Today"}
      </button>
    </div>
  );
}

CalendarInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
