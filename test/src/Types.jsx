import PropTypes from 'prop-types';
// import React from 'react';

const RenderName = (props) => {
  return <div>{props.name} Hi</div>;
};

RenderName.propTypes = {
  name: PropTypes.string,
};

RenderName.defaultProps = {
  name: 'Zach',
};

export default RenderName;
