import PropTypes from "prop-types";
import Calendar from "react-calendar";

export default function CalendarInput({ locale, onChange }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Calendar
        locale={locale}
        // onActiveStartDateChange={date}
        onChange={onChange}
      />
      {/* <button
          type="button"
          onClick={() => {
            const dateToSet = new Date();
            setDate(dateToSet);
          }}
        ></button> */}
    </div>
  );
}

CalendarInput.propTypes = {
  locale: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
