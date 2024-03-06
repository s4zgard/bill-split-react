const Button = ({ children, ...rest }) => (
  <button {...rest} className="button">
    {children}
  </button>
);

export default Button;
