import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
};

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
   <button className={`px-4 py-2 rounded-lg ${textColor} ${className} ${bgColor}`} {...props}>
    {children}
   </button>
  )
}

export default Button
