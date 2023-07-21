import React from 'react';
import PropTypes from 'prop-types';

function Button({
  onClick, btnm, btval,
}) {
  return (
    <button type="button" onClick={onClick} className={btnm}>
      {btval}
    </button>
  );
}

Button.propTypes = {
  btnm: PropTypes.string.isRequired,
  btval: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
