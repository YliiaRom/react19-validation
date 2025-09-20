function InputTest01({ id, label, error, hint, ...rest }) {
  return (
    <>
      <label htmlFor={id}>
        {label && <p>{label}</p>}
        <input {...rest} />
        {hint && !error && <p> {hint}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </label>
    </>
  );
}

export default InputTest01;
