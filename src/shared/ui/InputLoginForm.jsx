function InputLoginForm({ label, hint, error, ...rest }) {
  return (
    <>
      <label>
        {label && <p>{label}</p>}

        <input {...rest} />
      </label>

      {hint && !error && <p>{hint}</p>}
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default InputLoginForm;
