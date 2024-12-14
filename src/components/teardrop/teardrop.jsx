import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a component that displays a teardrop shape with optional text.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Teardrop(props) {
  const {
    color = 'black',
  } = props;

  return (
    <svg height="100%" width="100%" viewBox="0 0 40 40">
      <path d="M11 0C11 10 21 17 21 27 21 40 1 40 1 27 1 17 11 10 11 0Z" stroke={color} fill="none" />
    </svg>
  );
}

export default Teardrop;

Teardrop.propTypes = {
  /**
   * Specifies the name or hex code of the teardrop.
   */
  color: PropTypes.string,
};
