import PropTypes from 'prop-types';

Logo.propTypes = {
  width: PropTypes.string,
};

Logo.defaultProps = {
  width: '100px',
};

function Logo({width='100px'}) {
  return (
    <div style={{ width }}>
      Logo 
    </div>
  )
}

export default Logo
