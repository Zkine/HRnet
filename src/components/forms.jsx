import PropTypes from "prop-types";

export default function Forms({
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
}) {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}

Forms.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
