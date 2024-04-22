import PropType from "prop-types"


const Button = ({ variant, size, children, type,className, handleClick, isDisabled }) => {
  return (
    <div>
      <button
        data-variant={variant}
        data-size={size}
        type={type}
        
        className={className}
        onClick={handleClick}
        disabled={isDisabled}
        
      >
        {children}
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
    variant: PropType.string,
    size: PropType.string,
    padding: PropType.string,
    children: PropType.node,
    type: PropType.string,
    handleClick: PropType.func,
    isDisabled: PropType.bool,
    className: PropType.string
  }