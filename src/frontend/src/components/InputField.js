function InputField({ label, id, type = "text", className = "", ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} className={className} {...props} />
    </>
  );
}

export default InputField;
