import PropTypes from "prop-types";
// import { AiFillCaretDown } from "react-icons/ai";

export default function Select({
  htmlFor,
  className,
  children,
  name,
  id,
  className2,
}) {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {children[0]}
      </label>
      <select name={name} id={id} className={className2}>
        {children[1]}
      </select>
    </>
  );
}

Select.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className2: PropTypes.string.isRequired,
};
