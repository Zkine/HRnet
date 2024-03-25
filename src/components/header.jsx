import PropTypes from "prop-types";

export default function Header({ children }) {
  return (
    <header className="header">
      <h1>{children}</h1>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
