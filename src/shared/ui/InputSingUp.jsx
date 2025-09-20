function InputSingUp({ label, hint, error, ...rest }) {
  return (
    <>
      <label>
        {label && <p>{label}</p>}
        <input {...rest} />
        {hint && !error && <p>{hint}</p>}
      </label>

      {error && <p className="error">{error}</p>}
    </>
  );
}

export default InputSingUp;
