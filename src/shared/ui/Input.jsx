function Input({ label, error, hint, ...rest }) {
  return (
    <div>
      <label>
        {label && label}
        <input {...rest} />
      </label>
      {hint && !error && <div>{hint}</div>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Input;
