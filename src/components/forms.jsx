import { forwardRef } from "react";
import PropTypes from "prop-types";

const Forms = forwardRef(function Forms(
  {
    htmlFor,
    className,
    children,
    type,
    name,
    id,
    value,
    onFocus,
    onChange,
    onBlur,
  },
  ref
) {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="on"
      />
    </>
  );
});

export default Forms;

Forms.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
