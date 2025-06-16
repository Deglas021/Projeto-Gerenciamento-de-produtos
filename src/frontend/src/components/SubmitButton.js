function SubmitButton({ label = "Enviar" }) {
    return (
      <button type="submit" className="button">
        {label}
      </button>
    );
  }
  
  export default SubmitButton;
  